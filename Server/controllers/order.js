import {db} from "../db.js";
import jwt from "jsonwebtoken";

export const getOrders=(req,res)=>{
  const q ="SELECT * FROM orders";


  db.query(q, [], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
}
export const getuserOrders=(req,res)=>{
  const q ="SELECT * FROM orders WHERE uid IN (SELECT id FROM users WHERE username=?)" ;
  // console.log(q);
  // console.log(req.params.user);
  db.query(q, [req.params.user], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
}
export const getOrdersbyId=(req,res)=>{
  const q ="SELECT * FROM orders WHERE id=?" ;
  // console.log(q);
  // console.log(req.params.id);
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).send(err);
    // console.log(data);
    return res.status(200).json(data);
  });
}
export const addOrder=(req,res)=>{
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
      const q =
        "INSERT INTO orders(`model`, `color`, `quantity`, `recieving_time`,`uid`) VALUES (?)";
  
      const values = [
        req.body.model,
        req.body.color,
        req.body.quantity,
        req.body.recieving_time,
        userInfo.id,
      ];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Order has been placed.");
      });
    });  
}

export const updateAndDeleteOrder=(req,res)=>{
  // console.log(req.body.id);
  const q ="SELECT * FROM orders WHERE id=?" ;
  db.query(q, [req.body.id], (err, data) => {
    if (err) return res.status(500).send(err);
    // console.log(data[0]);
    const values=[
      req.body.id,
      data[0].model,
      data[0].quantity,
      data[0].recieving_time,
      data[0].color,
      data[0].uid
    ]
    // console.log(values);
    const q="INSERT INTO delivered_orders(`order_id`,`model`, `quantity`, `recieving_time`,`color`,`uid`) VALUES (?)";
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      // insertion done you have delete it from orders
      const q="DELETE FROM orders where `id`=?";
      db.query(q,[req.body.id],(err,data)=>{
        if (err) return res.status(500).json(err);
        return res.json("You have fullfilled the order successfully");
      })

    });
    // return res.status(200).json("You have fullfilled the order successfully");
  });
}

export const getDeliveredOrders=(req,res)=>{
  const q ="SELECT * FROM delivered_orders";


  db.query(q, [], (err, data) => {
    if (err) return res.status(500).send(err);
    // console.log("req is comming",data)
    return res.status(200).json(data);
  });
}