import express from "express";
import 'dotenv/config'
import mongoose from "mongoose";
import path from "path";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";

import studentRegister from "./routes/studentRegister.js";
import studentLogin from "./routes/studentLogin.js";
import studentDelete from "./routes/studentDelete.js";
import studentUpdate from "./routes/studentUpdate.js";
import studentRead from "./routes/studentRead.js";
const PORT = 3000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

// MongoDB connection
mongoose.connect(process.env.Dbcont)
    .then(() => console.log("MongoDB Connected"))
    .catch(error => console.log(error));

// Routes connection
app.use("/register", studentRegister);
app.use("/login", studentLogin);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});