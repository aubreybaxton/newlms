import express from "express";
import bcrypt from "bcrypt";
import admin from "../../model/adminSchema.js";
import superadmin from "../../model/superadminSchema.js";
const router = express.Router();

router.get('/update', (req, res) => {
    console.log("rendering the page")
    res.send("update admin")
});

router.post('/update', async (req, res) => {
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