import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import admin from "../../model/adminSchema.js";
import superadmin from "../../model/superadminSchema.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile("register.html", {
        root: "src/public"
    });
});

router.post("/creat", async (req, res) => {
    try {


        if (!req.session?.superadmin?.id) {
            return res.status(401).json({
                success: false,
                message: "Please login first"
            });
        }
        const superadminId = req.session.superadmin.id;

        const ad = await superadmin.findById(superadminId);

        if (!ad) {
            return res.send("Please login First");
        }

        const existingAdmin = await admin.findOne({
            email: req.body.email
        });

        if (existingAdmin) {
            res.send(" Admin already exists");
            console.log("user allready exist")
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const e = await admin.create({
            name: req.body.name,
            contact: req.body.number,
            email: req.body.email,
            password: hashedPassword,
            course: req.body.course
        });

        const token = jwt.sign(
            { email: e.email },
            process.env.JWT_SECRET
        );

        res.cookie("token", token);

        res.send(`${e.name} details saved`);

    } catch (error) {
        console.log(error);
        res.status(500).send("Cannot save the data");
    }
});

export default router;