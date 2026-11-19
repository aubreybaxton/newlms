import express from "express";
const router = express.Router();
router.get("/dashboard", (req, res) => {

    if (!req.session.student) {
       res.send("Please login first")
    }

    res.send("welcome to Dashboard")
});

export default router;