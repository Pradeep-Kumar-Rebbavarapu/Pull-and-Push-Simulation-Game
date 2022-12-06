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
import ToggleButton from "react-bootstrap/ToggleButton";
import state2ofwork_station3 from "../img/work_station3_state2.png";
import state2 from "../img/work_station4_state2.png"
import Alert from 'react-bootstrap/Alert';


const WorkStation4 = () => {
  const [show, setShow] = useState(false);
  const [message,setMessage]=useState("");
  const [order, setOrders] = useState({});
  const product_state = {
    0: "there is product under process on this workstation",
    1: "state from workstation 3",
    2: "updated state",
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/workstationget/infofromfour");
        // console.log(res.data[0]);
        setOrders(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const [checked, setChecked] = useState(false);

  const radios = [{ name: "Active", value: "1" }];

  const handleSendToWorkStation5= async(e)=>{
    try {
      // decrease quantity in work_station3 and update state of work_station4 to 1
      const res=await axios.put("/workstationcomponent/4",{
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
  const handleStand= async(e)=>{
    e.preventDefault();
    try {
      // change state of work_station3 1 to 2
      await axios.put("/workstationcomponent/4",{
        id:order.order_id
      }); 
      setMessage("You have assembled the stand !")
      setShow(true);
      // alert("You have assembled the stand !");
    } catch (err) {
        console.log(err);
    }
    
  }
  // const handleassemble=()=> {
  //   alert("You clicked assemble  !");
  // }

  const handlesendinfo = async () => {
    try {
      await axios.post("/workstationback/infotothree", order);
      setMessage("You have send the information for work_station 3")
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(order?.state);
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
            <h1>Workstation 4 </h1>
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
                        {order !== undefined && (
                          <tr>
                            <td>{order.model}</td>
                            <td>{order.quantity}</td>
                          </tr>
                        )}
                      </tbody>
                    </Table>
                  </Card.Body>
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
                </Card>
              </div>

              <div>
                <Card className="text-center" border="light">
                  <Card.Body>
                    <Card.Header className="my-3">Current status</Card.Header>
                    {order && order.state===1 && <Card.Img
                      variant="top"
                      src={state2ofwork_station3}
                      // width="462"
                      // height="225"
                    />}
                    {order && order.state===2 && <Card.Img
                      variant="top"
                      src={state2}
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
                    <Card.Header className="my-3">Materials for A</Card.Header>
                    <Button
                      variant="outline-primary"
                      size="lg"
                      onClick={handleStand}
                    >
                      {" "}
                      Stand{" "}
                    </Button>{" "}
                  </Card.Body>
                </Card>
              </div>

              <div>
                <Card className="text-center" border="light">
                  <Card.Body>
                    <Card.Header className="my-3">Materials for B</Card.Header>
                    <Button
                      variant="outline-primary"
                      size="lg"
                      onClick={handleStand}
                    >
                      {" "}
                      Stand{" "}
                    </Button>{" "}
                  </Card.Body>
                  {/* <div className="mb-2 my-4">
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={handleassemble}
                    >
                      Assemble
                    </Button>{" "}
                  </div> */}
                </Card>
              </div>

              <div>
                <Stack gap={2} className="col-md-5 mx-auto">
                  <p></p>
                  <p></p>
                  <Button variant="secondary" onClick={handleSendToWorkStation5}>
                    Send workstation 5
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

export default WorkStation4;
