import React, { useState} from "react";
import Table from "react-bootstrap/Table";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { useEffect } from "react";
import moment from "moment";
import Alert from "react-bootstrap/Alert";
// import Badge from "react-bootstrap/Badge";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Popover from "react-bootstrap/Popover";
import Offcanvas from "react-bootstrap/Offcanvas";

const ProductionManager = () => {
  const [Show, setSHow] = useState(false);
  const handleClose = () => setSHow(false);
  const handleShow = () => setSHow(true);
  const [orders, setOrders] = useState([]);
  const [d_orders, setd_Orders] = useState([]);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const buttonState = {
    0: "Start Productoin",
    1: "In Production",
    2: "Deliver",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/orders");
        // console.log(res.data[0]);
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
      // another trycatch
      try {
        const res = await axios.get("/orders/delivered");
        // console.log(res.data[0]);
        setd_Orders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handlesubmit = async (np) => {
    console.log(np.button_state);
    if (np.button_state === 1) {
      return;
    } else if (np.button_state === 0) {
      const inputs = {
        ws: 5,
        id: np.id,
        button_state: np.button_state,
      };
      console.log(inputs);
      try {
        // we should get data here of order id and send it to w5 and update button state
        await axios.post("/workstationback/infotofive", inputs);
        setMessage(`You have started the production for order no ${np.id}`);
        setShow(true);
      } catch (err) {
        console.log(err);
      }
    } else {
      // deliver
      // update delivery time by current time and delete its from production manager list
      // and add to delivered list
      try {
        const res = await axios.put("/orders", {
          id: np.id,
        });
        // alert(res.data);
        setMessage(res.data);
        setShow(true);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const len = d_orders.length;
  var totaltime = 0;
  var total_qunatity = 0;
  // console.log(d_orders);
  // calculating total average time
  d_orders?.map(
    (order) => (
      // milli seconds
      (totaltime +=
        (moment(order.delivery_time)._d - moment(order.recieving_time)._d) /
        1000),
      (total_qunatity += order.quantity)
    )
  );
  // d_orders?.map((order) => (

  //   console.log(moment(order.delivery_time)._d.getDate(),moment(order.delivery_time)._d.getMonth()+1,moment(order.delivery_time)._d.getYear(),moment(order.delivery_time).subtract(1,'days').format('YYYY-MM-DD h:mm:ss a'))
  // ))

  console.log(total_qunatity);
  var avgWTPerOrder = totaltime / len;
  var avgWTPerTV = totaltime / total_qunatity;
  // console.log(avgWTPerOrder)
  // console.log(`${(avgWTPerOrder-avgWTPerOrder%60)/60} min ${avgWTPerOrder%60} sec`)
  return (
    <div>
      <div>
        {show && (
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>{message}</Alert.Heading>
          </Alert>
        )}
      </div>
      <Card className="text-center" border="light">
        <Card.Body>
          <h1>Production Manager Page</h1>
          <hr></hr>
          {orders.length === 0 && (
            <h4 style={{ "margin-top": "20px" }}>
              {/* <Badge bg="secondary">There is no order pending to start production</Badge> */}
              There is no order pending to start production
            </h4>
          )}
          {orders.length > 0 && (
            <Stack gap={2} className="col-md-5 mx-auto">
              {/* <h1>Production Manager Page</h1> */}
              <Card.Header className="my-3">
                <h5>List of Orders</h5>{" "}
              </Card.Header>
            </Stack>
          )}
          {orders.length > 0 && (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Model</th>
                  <th>Color</th>
                  <th>Quantity</th>
                  <th>Receiving time</th>
                  {/* <th>Delivering time</th> */}
                  <th>Produced</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.model}</td>
                    <td>{order.color}</td>
                    <td>{order.quantity}</td>
                    <td>
                      {moment(order.recieving_time)
                        .subtract(1, "days")
                        .format("YYYY-MM-DD h:mm:ss a")}
                    </td>
                    {/* <td>
                    {order.delivery_time
                      ? order.delivery_time
                      : "Not delivered yet"}
                  </td> */}
                    <td>{order.produced_quantity}</td>
                    <td>
                      <Button
                        id={order.id}
                        variant="primary"
                        type="submit"
                        onClick={() =>
                          handlesubmit({
                            id: order.id,
                            button_state: order.state,
                          })
                        }
                      >
                        {order?.state === 1 && (
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                        )}
                        <span>{buttonState[order.state]}</span>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
          {/* <hr></hr> */}
          {d_orders.length > 0 && (
            <Stack gap={2} className="col-md-5 mx-auto">
              {/* <h1>Production Manager Page</h1> */}
              <Card.Header className="my-3">
                <h5>List of delivered Orders</h5>{" "}
              </Card.Header>
            </Stack>
          )}
          {d_orders.length > 0 && (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Model</th>
                  <th>Color</th>
                  <th>Quantity</th>
                  <th>Receiving time</th>
                  <th>Delivering time</th>
                  <th>Waiting time</th>
                </tr>
              </thead>
              <tbody>
                {d_orders?.map((order) => (
                  <tr key={order.order_id}>
                    <td>{order.order_id}</td>
                    <td>{order.model}</td>
                    <td>{order.color}</td>
                    <td>{order.quantity}</td>
                    <td>
                      {moment(order.recieving_time)
                        .subtract(1, "days")
                        .format("YYYY-MM-DD h:mm:ss a")}
                    </td>
                    <td>
                      {moment(order.delivery_time)
                        .subtract(1, "days")
                        .format("YYYY-MM-DD h:mm:ss a")}
                    </td>
                    <td>{`${
                      ((moment(order.delivery_time)._d -
                        moment(order.recieving_time)._d) /
                        1000 -
                        (((moment(order.delivery_time)._d -
                          moment(order.recieving_time)._d) /
                          1000) %
                          60)) /
                      60
                    } min & ${
                      ((moment(order.delivery_time)._d -
                        moment(order.recieving_time)._d) /
                        1000) %
                      60
                    } sec`}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
          {d_orders.length > 0 && (
            <div>
              <Button variant="primary" onClick={handleShow}>
                Show average waiting time
              </Button>

              <Offcanvas show={Show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Average Waiting Time</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <span>{`${(avgWTPerOrder - (avgWTPerOrder % 60)) / 60} min ${
                    avgWTPerOrder % 60
                  } sec per order`}</span>
                  <hr></hr>
                  <span>{`${(avgWTPerTV - (avgWTPerTV % 60)) / 60} min ${
                    avgWTPerTV % 60
                  } sec per TV`}</span>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductionManager;
