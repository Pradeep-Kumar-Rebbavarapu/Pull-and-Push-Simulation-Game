import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  const q = 'SELECT * FROM users WHERE email = $1 OR username = $2';

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    if (data.length) return res.status(409).json("User already exists!");

    // Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const insertQuery = 'INSERT INTO users(username, email, password, role) VALUES($1, $2, $3, $4)';
    const values = [req.body.username, req.body.email, hash, req.body.role];

    db.query(insertQuery, values, (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      return res.status(200).json("User has been created.");
    });
  });
}
  export const login = (req, res) => {
    //Check user Exist or not
    const q = "SELECT * FROM users WHERE username = $1";
    db.query(q, [req.body.username], (err, data) => {
      console.log(data.rows[0])
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(404).json("User not found!");
      if (data.rows[0].role != req.body.role) {
        return res.status(404).json("Your role is not matching with your registration details")
      }
      //Check password
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        data.rows[0].password
      );
      if (!isPasswordCorrect)
        return res.status(400).json("Wrong username or password!");

      const token = jwt.sign({ id: data.rows[0].id }, "jwtkey");
      const { password, ...other } = data.rows[0];

      res.cookie("access_token", token, {
        httpOnly: true,
      }).status(200).json(other);
    });
  }
  export const logout = (req, res) => {
    res.clearCookie("access_token", {
      sameSite: "none",
      secure: true
    }).status(200).json("User has been logged out");
  };