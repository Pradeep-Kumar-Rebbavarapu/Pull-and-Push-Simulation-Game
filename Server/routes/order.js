import express from "express";
const router = express.Router();
import { addOrder, getOrders, getuserOrders, getOrdersbyId,updateAndDeleteOrder,getDeliveredOrders } from "../controllers/order.js";

// router.get('/',(req,res)=>{
//     res.send("Hi you are connected");
// })

router.get("/delivered",getDeliveredOrders);
router.get("/", getOrders)
// router.get("/:user", getuserOrders)
router.get("/:id", getOrdersbyId)
router.post("/", addOrder);

router.put("/",updateAndDeleteOrder);


export default router;