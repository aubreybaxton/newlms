import express from "express";
import superadmin from "../../model/superadminSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { log } from "console";

const router = express.Router();



router.post("/create", async (req, res) => {
    try {

      

        const existingAdmin = await superadmin.findOne({
            id: "super@1234",
        });

        if (existingAdmin) {
            res.send("Super Admin already exists");
            console.log("user allready exist")
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash("Super@amin", salt);

        const e = await superadmin.create({

            id: "super@1234",
            password: hashedPassword,
        });

        const token = jwt.sign(
            { id: e.id },
            process.env.JWT_SECRET
        );

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax"
        });

        res.send("Super details saved");

    } catch (error) {
        console.log(error);
        res.status(500).send("Cannot save the data");
    }
});

export default router;