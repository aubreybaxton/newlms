import express from "express";
import qrcode from "qrcode";
import crypto from "crypto";

function generateRandomString() {
    return crypto.randomBytes(16).toString("hex");
}
                            
let randomString = "";

function updateRandomString() {
    randomString = generateRandomString();
 
     console.log(randomString)
    
}

updateRandomString();


setInterval(updateRandomString, 24 * 60 * 60 * 1000);

const router = express.Router();

router.get('/', (req, res) => {
    res.send("genrate QR here")
})

router.post("/genrat", async (req, res) => {

    const url = randomString

    const code = await qrcode.toDataURL(url);
   res.send(`
            <img src="${code}" alt="QR Code">
        `)
})

export default router;