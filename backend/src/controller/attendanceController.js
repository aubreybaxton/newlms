import attendance from "../model/attendaceSchema.js";
import student from "../model/studentSchema.js";



export async function handleMarkAttendance(req, res) {

    try {
        if (!req.session?.student?.id) {
            return res.status(401).json({
                success: false,
                message: "Please login first"
            });
        }
        const studentId = req.session.student.id;

        const st = await student.findById(studentId);

        if (!st) {
            return res.send("Please login First");
        }
        else {
            if (req.body.batch === st.batch) {
                const e = await attendance.create({

                    method: "QR",

                    student: st.name,

                    batch: req.body.batch,

                    status: req.body.status
                });
                console.log("attendece marked")
                res.send("attendece marked")
            } else {
                return res.status(400).send("Your batch does not match");
            }
        }

    }
    catch (error) {
        console.log(error);
        res.status(500).send("Cannot save the data")
    }
}