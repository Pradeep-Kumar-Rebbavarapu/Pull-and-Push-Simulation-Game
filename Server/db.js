import mysql from "mysql2"
import pg from 'pg'

export const db = new pg.Pool({
  connectionString:'postgres://pullandpushgame_user:1Sd3w2aViSQ5uu9baXjErVCJJbjllCUl@dpg-cklu9g8u1l6c739oljs0-a.singapore-postgres.render.com/pullandpushgame' ,
    ssl: {
        rejectUnauthorized: false
    }
})

db.connect(function (err) {
  if (err) {
      console.log('Error connecting to Database',err);
      return;
  }
  console.log('Connection established');
});
