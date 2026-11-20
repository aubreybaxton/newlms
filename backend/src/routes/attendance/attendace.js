import  express  from "express"
import { handleMarkAttendance } from "../../controller/attendanceController.js";
const router = express.Router();

router.post('/', handleMarkAttendance);


export default router;