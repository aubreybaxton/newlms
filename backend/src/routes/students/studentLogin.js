import express from "express";
import student from "../../model/studentSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import batch from "../../model/batchSchema.js";

const router = express.Router();

router.get("/login", (req, res) => {
    res.send("Hi this is student Login")
});

router.post("/login", async (req, res) => {
    try {
        const e = await student.findOne({
            email: req.body.email
        });

        if (!e) {
            return res.send("Student not found");
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

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax"
        });

        req.session.student = {
            id: e._id,
            name: e.name,
            email: e.email,
            batch: e.batch
        };

        req.session.save((err) => {
            if (err) {
                return res.status(500).send("Session save failed");
            }

            return res.send("You are logged in now");
        });

      

    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
});

export default router;