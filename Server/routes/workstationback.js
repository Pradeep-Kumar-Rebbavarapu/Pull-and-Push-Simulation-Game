import express from "express";
const router = express.Router();
import {sendBackInfotofive,sendBackInfotofour,sendBackInfotothree,sendBackInfototwo,sendBackInfotoone} from "../controllers/workstationback.js";
// router.get('/',(req,res)=>{
//     res.send("Hi you are connected");
// })

router.post("/infotofive", sendBackInfotofive);
router.post("/infotofour", sendBackInfotofour);
router.post("/infotothree", sendBackInfotothree);
router.post("/infototwo", sendBackInfototwo);
router.post("/infotoone", sendBackInfotoone);

export default router;