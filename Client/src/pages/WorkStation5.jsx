import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Stack from "react-bootstrap/Stack";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Table from "react-bootstrap/Table";
import axios from "axios";
import state2ofwork_station4 from "../img/work_station4_state2.png";
import red from "../img/red.jpeg";
import black from "../img/black.jpeg";
import gray from "../img/gray.jpeg";
import Alert from 'react-bootstrap/Alert';


const WorkStation5 = () => {
  const [show, setShow] = useState(false);
  const [message,setMessage]=useState("");
  const [order, setOrders] = useState({});
  const product_state = {
    0: "Not any state of  product",
    1: "state from workstation 4",
    2: "updated state",
  };
  // console.log(product_state);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/workstationget/infofromfive");
        // console.log(res.data[0]);
        setOrders(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const handlesendinfo = async () => {
    try {
      await axios.post("/workstationback/infotofour", order);
      setMessage("You have send the information for work_station 4")
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };
  const handleColor=async(e)=>{
    e.preventDefault();
    try {
      // change state of work_station3 1 to 2
      await axios.put("/workstationcomponent/5",{
        id:order.order_id
      }); 
      setMessage("You have colored the product !")
      setShow(true);
      // alert("You have colored the product !");
    } catch (err) {
        console.log(err);
    }
    
  }
  const handleSendToPM=async(e)=>{
    try {
      // decrease quantity in work_station3 and update state of work_station4 to 1
      const res=await axios.put("/workstationcomponent/5",{
        id:order.order_id,
        quantity:order.quantity
      }); 
      console.log(res);
      // alert(res.data);
      setMessage(res.data)
      setShow(true);
    } catch (err) {
        console.log(err);
    }
  }
  console.log(order?.state);
  return (
    <div className="app">
      <div className="container">
      <div>
      {show &&
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{message}</Alert.Heading>
      </Alert>
      }
      </div>
        <Card className="text-center" border="light">
          <Card.Body>
            <Stack gap={2} className="col-md-5 mx-auto">
              <h1>Workstation 5</h1>
            </Stack>
          </Card.Body>
        </Card>
        <div>
          <CardGroup>
            <Card>
              <Card.Body>
                <div>
                  <Card className="text-center" border="light">
                    <Card.Body>
                      <Card.Header className="my-3">Order</Card.Header>

                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Model</th>
                            <th>Quantity</th>
                            <th>Color</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order !== undefined && (
                            <tr>
                              <td>{order.model}</td>
                              <td>{order.quantity}</td>
                              <td>{order.color}</td>
                            </tr>
                          )}
                        </tbody>
                      </Table>

                      <div className="mb-2">
                        {order && order.send_info_button === 1 && (
                          <Button
                            variant="primary"
                            size="lg"
                            onClick={handlesendinfo}
                          >
                            Send Info
                          </Button>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </div>

                <div>
                  <Card className="text-center" border="light">
                    <Card.Body>
                      <Card.Header className="my-3">Current status</Card.Header>
                      {order && order.state===1 && <Card.Img
                      variant="top"
                      src={state2ofwork_station4}
                      // width="462"
                      // height="225"
                    />}
                    {order && order.state===2 && order.color==="red" && <Card.Img
                      variant="top"
                      src={red}
                      // width="462"
                      // height="225"
                    />}
                    {order && order.state===2 && order.color==="black" && <Card.Img
                      variant="top"
                      src={black}
                      // width="462"
                      // height="225"
                    />}
                    {order && order.state===2 && order.color==="gray" && <Card.Img
                      variant="top"
                      src={gray}
                      // width="462"
                      // height="225"
                    />}
                    </Card.Body>
                  </Card>
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <div>
                  <Card className="text-center" border="light">
                    <Card.Body>
                      <Card.Header className="my-3">Model Colors</Card.Header>

                      <div className="d-grid gap-2 pl-2 pr-4">
                        <Button variant="danger" size="lg" onClick={handleColor}>
                          Red
                        </Button>
                        <Button variant="dark" size="lg" onClick={handleColor}>
                          Black
                        </Button>
                        <Button variant="secondary" size="lg" onClick={handleColor}>
                          Gray
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>

                <div>
                  <Stack gap={2} className="col-md-5 mx-auto">
                    <p></p>
                    <p></p>
                    <Button
                      variant="secondary"
                      onClick={handleSendToPM}
                    >
                      Send To Production Manager
                    </Button>
                  </Stack>
                </div>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    </div>
  );
};

export default WorkStation5;
