import express from "express";
const router = express.Router();
import { getuserOrders,getuserDeliveredOrders} from "../controllers/userOrders.js";

router.get("/:user", getuserOrders)
router.get("/delivered/:user",getuserDeliveredOrders);
export default router;