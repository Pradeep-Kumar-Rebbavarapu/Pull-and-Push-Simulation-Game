import { db } from "../db.js";

export const updateWorkStation1=(req,res)=>{
    // console.log(req.body);
    if(req.body.name && req.body.name==="speaker"){
        // its mean i have to update one by one
        const q ="UPDATE work_station1 SET `speaker`=? WHERE `order_id` = ?";

        db.query(q, [1,req.body.id], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.json("Updated successfully.");
        });
    } else if (req.body.name && req.body.name==="screen") {
        const q ="UPDATE work_station1 SET `screen`=? WHERE `order_id` = ?";

        db.query(q, [1,req.body.id], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.json("Updated successfully.");
        });
    } else if(req.body.name && req.body.name==="button"){
        const q ="UPDATE work_station1 SET `button`=? WHERE `order_id` = ?";

        db.query(q, [1,req.body.id], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.json("Updated successfully.");
        });
    } else if(req.body.quantity && req.body.quantity==='1'){
                // if req.body.quantity===1 delete from work_station1 where order_id
                const q ="DELETE FROM work_station1 WHERE `order_id` = ?";

                db.query(q, [req.body.id], (err, data) => {
                if (err) return res.status(500).json(err);
                // console.log("deleted")
                //   work station 1 successfully send to work station 2 quantity 1so decrease quantity by 1 if become zero delete it and update values in work_station2

                    const q ="UPDATE work_station2 SET `speaker`=?, `screen`=?, `button`=? WHERE `order_id` = ?";
                    db.query(q, [1,1,1,req.body.id], (err, data) => {
                        if (err) return res.status(500).json(err);
                        return res.json("Work for one quantity done");
                    });
                }); 
    }else{
            // console.log("in else loop")
            const q ="UPDATE work_station1 SET `quantity`=?, `speaker`=?, `screen`=?, `button`=? WHERE `order_id` = ?";

                db.query(q, [req.body.quantity-1,0,0,0,req.body.id], (err, data) => {
                if (err) return res.status(500).json(err);
                //   work station 1 successfully send to work station 2 quantity 1so decrease quantity by 1 and update values in work_station2

                    const q ="UPDATE work_station2 SET `speaker`=?, `screen`=?, `button`=? WHERE `order_id` = ?";
                    db.query(q, [1,1,1,req.body.id], (err, data) => {
                        if (err) return res.status(500).json(err);
                        return res.json("Work for one quantity done");
                    });
                });            
    }
}

export const updateWorkStation2=(req,res)=>{
    // console.log(req.body);

    if(req.body.quantity){
        if(req.body.quantity && req.body.quantity==='1'){
            const q ="DELETE FROM work_station2 WHERE `order_id` = ?";

            db.query(q, [req.body.id], (err, data) => {
                if (err) return res.status(500).json(err);
                // now update state of work_station 3
                // console.log("deleted");
                const q ="UPDATE work_station3 SET `state`=? WHERE `order_id` = ?";
                db.query(q, [1,req.body.id], (err, data) => {
                    if (err) return res.status(500).json(err);
                    return res.json("Work for one quantity done");
                });
            }); 
        }else{
            // console.log("inside else")
            // send to workstation 3 and change the quantity in work_station 2 and update state of workstation 3
            const q ="UPDATE work_station2 SET `state`=?, `quantity`=? WHERE `order_id` = ?";

            db.query(q, [0,req.body.quantity-1,req.body.id], (err, data) => {
                if (err) return res.status(500).json(err);
                // now update state of work_station 3
                const q ="UPDATE work_station3 SET `state`=? WHERE `order_id` = ?";
                db.query(q, [1,req.body.id], (err, data) => {
                    if (err) return res.status(500).json(err);
                    return res.json("Work for one quantity done");
                });
            });            
        }

    }else{
        // update work_station2
        const q ="UPDATE work_station2 SET `speaker`=?, `screen`=?, `button`=?,`state`=? WHERE `order_id` = ?";
        db.query(q, [0,0,0,1,req.body.id], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json("Updated Successfully");
        });
    }
}

export const updateWorkStation3=(req,res)=>{
    // console.log(req.body);
    if(req.body.quantity){
        if(req.body.quantity && req.body.quantity==='1'){
            const q ="DELETE FROM work_station3 WHERE `order_id` = ?";

            db.query(q, [req.body.id], (err, data) => {
                if (err) return res.status(500).json(err);
                // now update state of work_station 4
                const q ="UPDATE work_station4 SET `state`=? WHERE `order_id` = ?";
                db.query(q, [1,req.body.id], (err, data) => {
                    if (err) return res.status(500).json(err);
                    return res.json("Work for one quantity done");
                });
            });
        }else{
            // send to workstation 3 and change the quantity in work_station 2 and update state of workstation 3
            const q ="UPDATE work_station3 SET `state`=?, `quantity`=? WHERE `order_id` = ?";

            db.query(q, [0,req.body.quantity-1,req.body.id], (err, data) => {
                if (err) return res.status(500).json(err);
                // now update state of work_station 4
                const q ="UPDATE work_station4 SET `state`=? WHERE `order_id` = ?";
                db.query(q, [1,req.body.id], (err, data) => {
                    if (err) return res.status(500).json(err);
                    return res.json("Work for one quantity done");
                });
            });
        }
    }else{
        // update work_station2
        const q ="UPDATE work_station3 SET `state`=? WHERE `order_id` = ?";
        db.query(q, [2,req.body.id], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json("Updated Successfully");
        });
    }
}

export const updateWorkStation4=(req,res)=>{
    // console.log(req.body);
    if(req.body.quantity){
        if(req.body.quantity && req.body.quantity==='1'){
            const q ="DELETE FROM work_station4 WHERE `order_id` = ?";

            db.query(q, [req.body.id], (err, data) => {
                if (err) return res.status(500).json(err);
                // now update state of work_station 5
                const q ="UPDATE work_station5 SET `state`=? WHERE `order_id` = ?";
                db.query(q, [1,req.body.id], (err, data) => {
                    if (err) return res.status(500).json(err);
                    return res.json("Work for one quantity done");
                });
            });
        }else{
            // send to workstation 3 and change the quantity in work_station 2 and update state of workstation 3
            const q ="UPDATE work_station4 SET `state`=?, `quantity`=? WHERE `order_id` = ?";

            db.query(q, [0,req.body.quantity-1,req.body.id], (err, data) => {
                if (err) return res.status(500).json(err);
                // now update state of work_station 5
                const q ="UPDATE work_station5 SET `state`=? WHERE `order_id` = ?";
                db.query(q, [1,req.body.id], (err, data) => {
                    if (err) return res.status(500).json(err);
                    return res.json("Work for one quantity done");
                });
            });
        }
    }else{
        // update work_station2
        const q ="UPDATE work_station4 SET `state`=? WHERE `order_id` = ?";
        db.query(q, [2,req.body.id], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json("Updated Successfully");
        });
    }
}

export const updateWorkStation5=(req,res)=>{
    // console.log(req.body);
    if(req.body.quantity){
        if(req.body.quantity && req.body.quantity==='1'){
            const q ="DELETE FROM work_station5 WHERE `order_id` = ?";

            db.query(q, [req.body.id], (err, data) => {
                if (err) return res.status(500).json(err);
                // now update in orders
                const q="SELECT * FROM orders WHERE id=?";
                db.query(q,[req.body.id],(err,data)=>{
                    if (err) return res.status(500).json(err);
                    const pq=data[0].produced_quantity+1;
                    const st=data[0].state;
                    const rq=data[0].quantity;
                    if(pq==rq){
                        const q ="UPDATE orders SET `produced_quantity`=?,`state`=? WHERE `id` = ?";
                        db.query(q, [pq,st+1,req.body.id], (err, data) => {
                            if (err) return res.status(500).json(err);
                            return res.json("Work for one quantity done");
                        });
                    }else{
                        const q ="UPDATE orders SET `produced_quantity`=? WHERE `id` = ?";
                        db.query(q, [pq,req.body.id], (err, data) => {
                            if (err) return res.status(500).json(err);
                            return res.json("Work for one quantity done");
                        });
                    }
                })
            });
        }else{
            const q ="UPDATE work_station5 SET `state`=?, `quantity`=? WHERE `order_id` = ?";

            db.query(q, [0,req.body.quantity-1,req.body.id], (err, data) => {
                if (err) return res.status(500).json(err);
                // now update in orders
                const q="SELECT * FROM orders WHERE id=?";
                db.query(q,[req.body.id],(err,data)=>{
                    if (err) return res.status(500).json(err);
                    const pq=data[0].produced_quantity+1;
                    const st=data[0].state;
                    const rq=data[0].quantity;
                    if(pq==rq){
                        const q ="UPDATE orders SET `produced_quantity`=?,`state`=? WHERE `id` = ?";
                        db.query(q, [pq,st+1,req.body.id], (err, data) => {
                            if (err) return res.status(500).json(err);
                            return res.json("Work for one quantity done");
                        });
                    }else{
                        const q ="UPDATE orders SET `produced_quantity`=? WHERE `id` = ?";
                        db.query(q, [pq,req.body.id], (err, data) => {
                            if (err) return res.status(500).json(err);
                            return res.json("Work for one quantity done");
                        });
                    }
                })
            });
        }
    }else{
        // update work_station2
        const q ="UPDATE work_station5 SET `state`=? WHERE `order_id` = ?";
        db.query(q, [2,req.body.id], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json("Updated Successfully");
        });
    }
}