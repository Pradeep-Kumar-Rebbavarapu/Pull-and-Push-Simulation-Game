import { db } from "../db.js";
import jwt from "jsonwebtoken";


export const sendBackInfotofive = (req, res) => {
  // console.log(req.body);
      // updating button state
      const q1 = "update orders set state=? where id=?";
      db.query(q1, [req.body.button_state + 1, req.body.id], (err, data) => {
        if (err) return res.status(500).send(err);
        // console.log(data);
        // console.log("done successfully");
      });

      const q = "SELECT * FROM orders WHERE id=?";
      // console.log(q);
      // console.log(req.params.id);
      db.query(q, [req.body.id], (err, data) => {
        if (err) return res.status(500).send(err);
        // console.log(data[0]);
        const q2 =
          "INSERT INTO work_station5(`order_id`, `model`, `color`, `quantity`) VALUES (?)";
        const values = [
          data[0].id,
          data[0].model,
          data[0].color,
          data[0].quantity
        ];

        db.query(q2, [values], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.json("req has been sent to work_station 5.");
        });
      });

  
}

export const sendBackInfotofour=(req,res)=>{
  // console.log(req.body);
  const q1 = "update work_station5 set send_info_button=0 where order_id=?";
  db.query(q1,[req.body.order_id],(err,data)=>{
    if (err) return res.status(500).send(err);
    // console.log(data);
    // console.log("done successfully");
  })
    const q =
      "INSERT INTO work_station4(`order_id`, `model`, `quantity`) VALUES (?)";
    const values = [
      req.body.order_id,
      req.body.model,
      req.body.quantity
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("req has been sent to work_station 4.");
    });
}

export const sendBackInfotothree=(req,res)=>{
  const q1 = "update work_station4 set send_info_button=0 where order_id=?";
  db.query(q1,[req.body.order_id],(err,data)=>{
    if (err) return res.status(500).send(err);
    // console.log(data);
    // console.log("done successfully");
  })
  // console.log(req.body);
    const q =
      "INSERT INTO work_station3(`order_id`, `model`, `quantity`) VALUES (?)";
    const values = [
      req.body.order_id,
      req.body.model,
      req.body.quantity
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("req has been sent to work_station 4.");
    });
}


export const sendBackInfototwo=(req,res)=>{
  const q1 = "update work_station3 set send_info_button=0 where order_id=?";
  db.query(q1,[req.body.order_id],(err,data)=>{
    if (err) return res.status(500).send(err);
    // console.log(data);
    // console.log("done successfully");
  })
  // console.log(req.body);
    const q =
      "INSERT INTO work_station2(`order_id`, `model`, `quantity`) VALUES (?)";
    const values = [
      req.body.order_id,
      req.body.model,
      req.body.quantity
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("req has been sent to work_station 4.");
    });
}

export const sendBackInfotoone=(req,res)=>{
  const q1 = "update work_station2 set send_info_button=0 where order_id=?";
  db.query(q1,[req.body.order_id],(err,data)=>{
    if (err) return res.status(500).send(err);
    // console.log(data);
    // console.log("done successfully");
  })
  // console.log(req.body);
    const q =
      "INSERT INTO work_station1(`order_id`, `model`, `quantity`) VALUES (?)";
    const values = [
      req.body.order_id,
      req.body.model,
      req.body.quantity
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("req has been sent to work_station 4.");
    });
}