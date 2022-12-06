import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js" 
import orderRoutes from "./routes/order.js"
import workStationBackRoutes from "./routes/workstationback.js"
import workStationGetRoutes from "./routes/workstationget.js";
import workStationCompRoutes from "./routes/workstationcomponents.js";
import userOrdersRoutes from "./routes/userOrders.js";
import cookieParser from "cookie-parser";
import  dotenv  from "dotenv";

dotenv.config();

const PORT=8800; 
const app=express();

// middlewares
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:"http://localhost:3000",
}));


app.use("/api/auth",authRoutes);
app.use("/api/orders",orderRoutes);
app.use("/api/userorders",userOrdersRoutes);
app.use("/api/workstationback",workStationBackRoutes);
app.use("/api/workstationget",workStationGetRoutes);
app.use("/api/workstationcomponent",workStationCompRoutes);

app.listen(process.env.PORT||PORT,()=>{
    console.log(`Connected & listen on port ${PORT}` );
})





