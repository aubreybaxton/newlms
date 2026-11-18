import express from "express";
import student from "../model/studentSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get('/read', async (req, res) => {
    let e = await student.find();
    res.send(e)
});

export default router;