import express from "express";
const router = express.Router();
import {getInfofromfive,getInfofromfour,getInfofromthree,getInfofromtwo,getInfofromone} from "../controllers/workstationget.js";
// router.get('/',(req,res)=>{
//     res.send("Hi you are connected");
// })

router.get("/infofromfive", getInfofromfive);
router.get("/infofromfour", getInfofromfour);
router.get("/infofromthree", getInfofromthree);
router.get("/infofromtwo", getInfofromtwo);
router.get("/infofromone", getInfofromone);




export default router;