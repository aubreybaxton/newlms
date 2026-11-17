const express = require("express")
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cookiesParser = require('cookie-parser');
dotenv.config({ path: path.join(__dirname, "../.env") })
mongoose.connect(process.env.Dbcont);
const student = require("./model/studentSchema");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { render } = require("ejs");
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookiesParser());

app.get('/', (req, res) => {
    res.render("register");
});

app.post("/create", async (req, res) => {
    console.log("clicked btn");
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const e = await student.create({
            name: req.body.name,
            contact: req.body.number,
            gender: req.body.gender,
            email: req.body.email,
            password: hashedPassword,
            cours: req.body.cours,
            batch: req.body.batch

        });
        let token = jwt.sign({ email }, "ajlkjklsajka")
        console.log(req.body);
        res.cookie("token", token);
        res.send(`${e.name} details saved`);
        console.log("data save");
    }

    catch (error) {
        console.log(error, "cant save the data");
    }
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    let e = student.findOne({ email: req.body.email })
    if (e) console.log("student find")
    else console.log("student not")

    bcrypt.compare(req.body.password, student.password, (err, result) => {
        if (result) {
            res.send("you are login")

        }
        else {
            res.send("somthing went wrong")
        }
    })

});

app.get('/delete', (req, res) => {
    console.log("rendering the page")
    res.render('delete');
});
app.post("/delete", async (req, res) => {

    try {
        let e = await student.findOneAndDelete({ name: req.body.name })

        console.log("user deleted")
        res.send("user deleted ")
    }
    catch (error) {
        console.log(error, ("please find the error"))
    }
});

app.get('/read', async (req, res) => {
    let e = await student.find();
    res.send(e)
});


app.get('/update', (req, res) => {
    console.log("rendering the page")
    res.render('update');
});

app.post('/update', async (req, res) => {
    try {
        let e = await student.findOneAndUpdate({ name: req.body.up }, { name: req.body.name, contact: req.body.number, gender: req.body.gender }, { returnDocument: 'after' })
        res.send("user updated")
        console.log("user update")

    }
    catch (error) {
        console.log(error, ("error find"))
    }
});

app.listen(port);   