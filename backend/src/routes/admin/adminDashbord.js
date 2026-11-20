import express from "express";
const router = express.Router();
router.post("/dashboard", (req, res) => {

    if (!req.session.admin) {
       res.send("Please login first")
    }

    res.send("welcome to Dashboard")
});

export default router;