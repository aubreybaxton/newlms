import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./backend/.env" });
import mongoose from "mongoose";
import path from "path";
import cookieParser from "cookie-parser";
import session from "express-session";

//route connection
import studentRegister from "./routes/studentRegister.js";
import studentLogin from "./routes/studentLogin.js";
import studentDelete from "./routes/studentDelete.js";
import studentUpdate from "./routes/studentUpdate.js";
import studentRead from "./routes/studentRead.js";
import adminRegister from "./routes/adminRegister.js";
import adminLogin from "./routes/adminLogin.js";
import superadminLogin from "./routes/superadminLogin.js";
import superadminCreat from "./routes/superadminCreat.js"
import studentDashboard from "./routes/studentDashboard.js";
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

app.use(express.static(path.join("public")));

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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});