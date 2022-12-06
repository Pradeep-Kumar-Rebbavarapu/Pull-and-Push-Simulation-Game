import { db } from "../db.js";

export const getInfofromfive=(req,res)=>{
    const q ="SELECT * FROM work_station5";
    // +----------+--------------+------+-----+---------+-------+
    // | Field    | Type         | Null | Key | Default | Extra |
    // +----------+--------------+------+-----+---------+-------+
    // | order_id | int          | NO   | PRI | NULL    |       |
    // | model    | varchar(255) | NO   |     | NULL    |       |
    // | color    | varchar(255) | NO   |     | NULL    |       |
    // | quantity | varchar(255) | NO   |     | NULL    |       |
    // | state    | int          | YES  |     | 0       |       |

    db.query(q, [], (err, data) => {
      if (err) return res.status(500).send(err);
  
      return res.status(200).json(data);
    });
}
export const getInfofromfour=(req,res)=>{
    const q ="select * from work_station4";
    // +----------+--------------+------+-----+---------+-------+
    // | Field    | Type         | Null | Key | Default | Extra |
    // +----------+--------------+------+-----+---------+-------+
    // | order_id | int          | NO   | PRI | NULL    |       |
    // | model    | varchar(255) | NO   |     | NULL    |       |
    // | color    | varchar(255) | NO   |     | NULL    |       |
    // | quantity | varchar(255) | NO   |     | NULL    |       |
    // | state    | int          | YES  |     | 0       |       |
    db.query(q, [], (err, data) => {
      if (err) return res.status(500).send(err);
  
      return res.status(200).json(data);
    });
}
export const getInfofromthree=(req,res)=>{
    const q ="SELECT * FROM work_station3";
    // +----------+--------------+------+-----+---------+-------+
    // | Field    | Type         | Null | Key | Default | Extra |
    // +----------+--------------+------+-----+---------+-------+
    // | order_id | int          | NO   | PRI | NULL    |       |
    // | model    | varchar(255) | NO   |     | NULL    |       |
    // | quantity | varchar(255) | NO   |     | NULL    |       |
    // | state    | int          | YES  |     | 0       |       |
    // +----------+--------------+------+-----+---------+-------+
    db.query(q, [], (err, data) => {
      if (err) return res.status(500).send(err);
  
      return res.status(200).json(data);
    });
}
export const getInfofromtwo=(req,res)=>{
    const q ="SELECT * FROM work_station2";
    // +----------+--------------+------+-----+---------+-------+
    // | Field    | Type         | Null | Key | Default | Extra |
    // +----------+--------------+------+-----+---------+-------+
    // | order_id | int          | NO   | PRI | NULL    |       |
    // | model    | varchar(255) | NO   |     | NULL    |       |
    // | quantity | varchar(255) | NO   |     | NULL    |       |
    // | speaker  | int          | NO   |     | 0       |       |
    // | screen   | int          | NO   |     | 0       |       |
    // | button   | int          | NO   |     | 0       |       |
    // | state    | int          | YES  |     | 0       |       |
    // +----------+--------------+------+-----+---------+-------+
    db.query(q, [], (err, data) => {
      if (err) return res.status(500).send(err);
  
      return res.status(200).json(data);
    });
}
export const getInfofromone=(req,res)=>{
    const q ="SELECT * FROM work_station1";
    // +----------+--------------+------+-----+---------+-------+
    // | Field    | Type         | Null | Key | Default | Extra |
    // +----------+--------------+------+-----+---------+-------+
    // | order_id | int          | NO   | PRI | NULL    |       |
    // | model    | varchar(255) | NO   |     | NULL    |       |
    // | quantity | varchar(255) | NO   |     | NULL    |       |
    // | speaker  | int          | NO   |     | 0       |       |
    // | screen   | int          | NO   |     | 0       |       |
    // | button   | int          | NO   |     | 0       |       |
    // +----------+--------------+------+-----+---------+-------+
    db.query(q, [], (err, data) => {
      if (err) return res.status(500).send(err);
  
      return res.status(200).json(data);
    });
}