import express from "express";
import student from "../../model/studentSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile("register.html", {
        root: "src/public"
    });
});

router.post("/create", async (req, res) => {
    try {

        const existingStudent = await student.findOne({
            email: req.body.email
        });

        if (existingStudent) {
            res.send(" Student already exists");
            console.log("user allready exist")
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const e = await student.create({
            name: req.body.name,
            contact: req.body.number,
            gender: req.body.gender,
            email: req.body.email,
            password: hashedPassword,
            cours: req.body.cours,
            batch: req.body.batch
        });

        const token = jwt.sign(
            { email: e.email },
            process.env.JWT_SECRET
        );

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax"
        });

        res.send(`${e.name} details saved`);

    } catch (error) {
        console.log(error);
        res.status(500).send("Cannot save the data");
    }
});

export default router;