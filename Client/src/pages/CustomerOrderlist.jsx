import React, { useState, useContext } from "react";
import Table from "react-bootstrap/Table";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner';
import emc1 from "../img/empty-cart.png"
import axios from "axios";
import { useEffect } from "react";
import { AuthContext } from "../context/authContext";
import Figure from 'react-bootstrap/Figure';
import { Link, useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import moment from "moment";


const CustomerOrderlist = () => {
  const [orders, setOrders] = useState([]);
  const [d_orders, setd_Orders] = useState([]);
  const { currentUser } = useContext(AuthContext);
  // const u=currentUser.username;
  // console.log(currentUser.username)
  useEffect(() => {
    // console.log("Customer order list");
    const fetchData = async () => {
      try {
        const res = await axios.get(`/userorders/${currentUser?.username}`);
        console.log(res.data);
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
      // another trycatch
      try {
        const res = await axios.get(`/userorders/delivered/${currentUser?.username}`);
        // console.log(res.data[0]);
        setd_Orders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  // orders.map((order)=>{
  //   console.log(order);

  // })
  // console.log(orders);
 
  return (
    <div>
      <Card className="text-center" border="light">
        <Card.Body>
        <Stack gap={2} className="col-md-5 mx-auto">
          <h1>Profile</h1>
          
          <h3><Badge bg="info">{currentUser?.username}</Badge> </h3>
          { orders.length===0 &&
            <Figure>
                <Figure.Image
                  width={351}
                  height={390}
                  alt="171x180"
                  src={emc1}
                />
                <Figure.Caption style={{"margin":"15px"}}>
                  <h5>Your cart is empty </h5>
                  
                  <Link to="/customer" style={{"text-decoration":"none"}}> Place Order</Link>
                </Figure.Caption>
             </Figure>
            // <Card.Img variant="top" src={emc1} />

          }

        </Stack>
          {orders.length>0 && <Stack gap={2} className="col-md-5 mx-auto">
            <Card.Header className="my-4"><h5>List of Orders in progress</h5> </Card.Header>
          </Stack>}

          {orders.length>0 && <Table striped bordered hover>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Model</th>
                <th>Color</th>
                <th>Quantity</th>
                <th>Ordering time</th>
                <th>Current State</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.model}</td>
                  <td>{order.color}</td>
                  <td>{order.quantity}</td>
                  <td>{moment(order.recieving_time).subtract(1,'days').format('YYYY-MM-DD h:mm:ss a')}</td>
                  <td>{      <Button variant="primary" disabled>
                        <Spinner
                          as="span"
                          animation="border" 
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        <span> Waiting...</span>
                       
                      </Button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          }

          {d_orders.length>0 && <Stack gap={2} className="col-md-5 mx-auto">
            {/* <h1>Production Manager Page</h1> */}
            <Card.Header className="my-3"><h5>List of delivered Orders</h5>  </Card.Header>
          </Stack>}
         {d_orders.length>0 && <Table striped bordered hover  >
            <thead >
              <tr>
                <th>Order Id</th>
                <th>Model</th>
                <th>Color</th>
                <th>Quantity</th>
                <th>Receiving time</th>
                <th>Delivering time</th>
              </tr>
            </thead>
            <tbody>
              {d_orders?.map((order) => (
                <tr key={order.order_id}>
                  <td>{order.order_id}</td>
                  <td>{order.model}</td>
                  <td>{order.color}</td>
                  <td>{order.quantity}</td>
                  <td>{moment(order.recieving_time).subtract(1,'days').format('YYYY-MM-DD h:mm:ss a')}</td>
                  <td>{moment(order.delivery_time).subtract(1,'days').format('YYYY-MM-DD h:mm:ss a')}</td>
                </tr>
              ))}
            </tbody>
          </Table> }         
        </Card.Body>
      </Card>

    </div>
  );
};

export default CustomerOrderlist;
