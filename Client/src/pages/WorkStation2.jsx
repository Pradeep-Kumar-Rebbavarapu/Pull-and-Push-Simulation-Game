import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Stack from "react-bootstrap/Stack";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Table from "react-bootstrap/Table";
import state1 from "../img/work_station2_state1.png"
import Alert from 'react-bootstrap/Alert';
 
// import { p_components } from "../components";

const WorkStation2 = () => {
  const [show, setShow] = useState(false);
  const [message,setMessage]=useState("");
  const [order, setOrders] = useState({});
  // console.log(order);
  const order_state = {
    0: "No order",
    1: "after assembling",
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/workstationget/infofromtwo");
        // console.log(res.data[0]);
        setOrders(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSendToWorkStation3= async(e)=>{
    try {
      const res=await axios.put("/workstationcomponent/2",{
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
  const handlesendinfo= async()=> {
    try {
      await axios.post("/workstationback/infotoone",order) 
      setMessage("You have send the information for work_station 1")
      setShow(true);
    } catch (err) {
        console.log(err);
    }
  }
  const handleassemble=async(e)=>{
    e.preventDefault();
    try {
      await axios.put("/workstationcomponent/2",{
        id:order.order_id
      }); 
      setMessage("You have assembled the components !")
      setShow(true);
      // alert("You have assembled the components !");
    } catch (err) {
        console.log(err);
    }
    
  }
  console.log(order?.state);
  return (
    <div>
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
            <h1>Workstation 2</h1>
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
                        </tr>
                      </thead>
                      <tbody>
                        {order!==undefined&&<tr>
                          <td>{order?.model}</td>
                          <td>{order?.quantity}</td>
                        </tr>}

                      </tbody>
                    </Table>
                    <div className="mb-2">
                    {order && order?.send_info_button===1&& 
                       <Button
                          variant="primary"
                          size="lg"
                          onClick={handlesendinfo}
                        >
                          Send Info
                        </Button>
                        }
                    </div>
                  </Card.Body>
                </Card>
              </div>

              <div>
                <Card className="text-center" border="light">
                  <Card.Body>
                    <Card.Header className="">Current status</Card.Header>
                    {order && order.state===1 && <Card.Img
                      variant="top"
                      src={state1}
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
                    <Card.Header className="my-3">
                      {" "}
                      Available inventory
                    </Card.Header>

                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Model</th>
                          <th>Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Speaker</td>
                          <td>{order?.speaker}</td>
                        </tr>
                        <tr>
                          <td>Screen</td>
                          <td>{order?.screen}</td>
                        </tr>
                        <tr>
                          <td>Button</td>
                          <td>{order?.button}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card.Body>

                  <div className="mb-2">
                    <Button
                      variant="primary"
                      onClick={handleassemble}
                      size="lg"
                    >
                      Assemble
                    </Button>{" "}
                  </div>
                </Card>
              </div>

              <div></div>

              <div>
                <Stack gap={2} className="col-md-5 mx-auto">
                  <p></p>
                  <p></p>
                  <Button variant="secondary" onClick={handleSendToWorkStation3}>
                    Send workstation 3
                  </Button>
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default WorkStation2;
