import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./backend/.env" });
import mongoose from "mongoose";
import path from "path";
import cookieParser from "cookie-parser";
import session from "express-session";

//route connection
import studentDashboard from "./routes/students/studentDashboard.js";
import studentRegister from "./routes/students/studentRegister.js";
import studentLogin from "./routes/students/studentLogin.js";
import studentDelete from "./routes/students/studentDelete.js";
import studentUpdate from "./routes/students/studentUpdate.js";
import studentRead from "./routes/students/studentRead.js";

import adminRegister from "./routes/admin/adminRegister.js";
import adminLogin from "./routes/admin/adminLogin.js";
import adminUpdate from "./routes/admin/adminUpate.js"
import adminDashbord from "./routes/admin/adminDashbord.js"

import superadminLogin from "./routes/suparadmin/superadminLogin.js";
import superadminCreat from "./routes/suparadmin/superadminCreat.js"

import qrgenrater from "./routes/qrGenrater/qrGenrater.js"
const PORT = 3000;



const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 1000
    }
}));



// student MongoDB connection
mongoose.connect(process.env.Dbcont)
    .then(() => console.log("MongoDB Connected")
    )
    .catch(error => console.log(error));

// Routes APIS
app.use("/student", studentRegister);
app.use("/student", studentLogin);
app.use("/update", studentUpdate);
app.use("/delete", studentDelete);
app.use("/read", studentRead);
app.use("/admin", adminLogin);
app.use("/admin", adminRegister);
app.use("/superadmin", superadminLogin)
app.use("/superadmin", superadminCreat)
app.use("/student", studentDashboard)
app.use("/admin", adminDashbord)
app.use("/admin", adminUpdate)
app.use("/qr", qrgenrater)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});