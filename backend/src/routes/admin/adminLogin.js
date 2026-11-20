import express from "express";
import bcrypt from "bcrypt";
import admin from "../../model/adminSchema.js";
import jwt from "jsonwebtoken";


const router = express.Router();

router.get("/login", (req, res) => {
    res.send("This is admin login")
});

router.post("/login", async (req, res) => {
    try {
        if (!req.session.superadmin) {
            return res.status(401).send("Please login first");
        }

        const existingAdmin = await admin.findOne({
            email: req.body.email
        });

        if (existingAdmin) {
            res.send(" Admin already exists");
            console.log("user allready exist")
        }
        const e = await admin.findOne({
            email: req.body.email
        });

        if (!e) {
            return res.send("admin not found");
        }

        const result = await bcrypt.compare(
            req.body.password,
            e.password
        );

        if (!result) {
            return res.send("Wrong password");
        }

        const token = jwt.sign(
            { email: e.email },
            process.env.JWT_SECRET
        );

        res.cookie("token", token);

        res.send("Admin are logged in now");

        req.session.student = {

            id: e._id,
            name: e.name,
            email: e.email
        };

    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
});

export default router;