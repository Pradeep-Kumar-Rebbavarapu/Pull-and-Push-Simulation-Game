import express from "express";
const router = express.Router();
import {updateWorkStation1,updateWorkStation2,updateWorkStation3,updateWorkStation4,updateWorkStation5} from "../controllers/workstationcomponents.js";
// router.get('/',(req,res)=>{
//     res.send("Hi you are connected");
// })

router.put("/1", updateWorkStation1);
router.put("/2", updateWorkStation2);
router.put("/3", updateWorkStation3);
router.put("/4", updateWorkStation4);
router.put("/5", updateWorkStation5);
export default router;