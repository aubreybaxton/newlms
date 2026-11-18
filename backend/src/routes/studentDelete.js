import express from "express";
import student from "../model/studentSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get('/delete', (req, res) => {
    console.log("rendering the page")
     res.sendFile(path.join(root, "delete.html"));
});
router.post("/delete", async (req, res) => {

    try {
        let e = await student.findOneAndDelete({ name: req.body.name })

        console.log("user deleted")
        res.send("user deleted ")
    }
    catch (error) {
        console.log(error, ("please find the error"))
    }
});

export default router;