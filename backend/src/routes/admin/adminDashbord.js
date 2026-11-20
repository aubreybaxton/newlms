import express from "express";
import admin from "../../model/adminSchema.js";

const router = express.Router();
router.post("/dashboard", async(req, res) => {

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
    res.send("welcome to Dashboard")
});

export default router;