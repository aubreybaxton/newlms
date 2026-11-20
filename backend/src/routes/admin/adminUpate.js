import express from "express";
import bcrypt from "bcrypt";
import admin from "../../model/adminSchema.js";

const router = express.Router();

router.get('/update', (req, res) => {
    console.log("rendering the page")
    res.send("update admin")
});

router.post('/update', async (req, res) => {
    try {

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        let e = await admin.findOneAndUpdate({ name: req.body.up }, { name: req.body.name, contact: req.body.number, email: req.body.email, password: hashedPassword, cours: req.body.cours }, { returnDocument: 'after' })
        res.send("admin updated")
        console.log("admin update")

    }
    catch (error) {
        console.log(error, ("error find"))
    }
});

export default router;