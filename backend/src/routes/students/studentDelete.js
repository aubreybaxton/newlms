import express from "express";
import student from "../../model/studentSchema.js";


const router = express.Router();

router.get('/delete', (req, res) => {
    console.log("rendering the page")
    res.sendFile(path.join(root, "delete.html"));
});
router.post("/delete", async (req, res) => {

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
        
        let e = await student.findOneAndDelete({ name: req.body.name })

        console.log("user deleted")
        res.send("user deleted ")
    }
    catch (error) {
        console.log(error, ("please find the error"))
    }
});

export default router;