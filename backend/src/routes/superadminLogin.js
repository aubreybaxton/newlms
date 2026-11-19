import express from "express";
import bcrypt from "bcrypt";
import superadmin from "../model/superadminSchema.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/login", (req, res) => {
    res.send("Hi prem")
})

router.post("/login", async (req, res) => {
    try {
        const e = await superadmin.findOne({
            email: req.body.email
        });

        if (!e) {
            return res.send("SuperAdmin not found");
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
        req.session.student = {

            name: e.name,
            email: e.email
        };
        
        res.send("SuperAdmin are logged in now");

    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
});

export default router;