import {db} from "../db.js";
import jwt from "jsonwebtoken";

export const getuserOrders=(req,res)=>{
  const q ="SELECT * FROM orders WHERE uid IN (SELECT id FROM users WHERE username=?)" ;
  // console.log(q);
  // console.log(req.params.user);
  db.query(q, [req.params.user], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
}

export const getuserDeliveredOrders=(req,res)=>{
  const q ="SELECT * FROM delivered_orders WHERE uid IN (SELECT id FROM users WHERE username=?)" ;
  // console.log(q);
  // console.log(req.params.user);
  db.query(q, [req.params.user], (err, data) => {
    if (err) return res.status(500).send(err);
    // console.log(data);
    return res.status(200).json(data);
  });
}