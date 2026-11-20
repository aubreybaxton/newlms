import express from "express";
import student from "../../model/studentSchema.js";
import bcrypt from "bcrypt";


const router = express.Router();
router.get('/update', (req, res) => {
    console.log("rendering the page")
    res.sendFile(path.join(root, "update.html"));
});

router.post('/update', async (req, res) => {
    try {
        if (!req.session?.admin?.id) {
            return res.status(401).json({
                success: false,
                message: "Please login first"
            });
        }
        const adminId = req.session.admin.id;

        const ad = await admin.findById(adminId);

        if (!ad) {
            return res.send("Please login First");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        let e = await student.findOneAndUpdate({ name: req.body.up }, { name: req.body.name, contact: req.body.number, gender: req.body.gender, email: req.body.email, password: hashedPassword, gender: req.body.gender, cours: req.body.cours }, { returnDocument: 'after' })
        res.send("user updated")
        console.log("user update")

    }
    catch (error) {
        console.log(error, ("error find"))
    }
});

export default router;