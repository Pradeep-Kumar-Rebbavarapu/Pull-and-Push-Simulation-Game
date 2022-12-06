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
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from 'react-bootstrap/Alert';


// import { p_components } from "../components";
import { MDBBtn } from "mdb-react-ui-kit";

const WorkStation1 = () => {
  const [order, setOrders] = useState({});
  const [show, setShow] = useState(false);
  const [message,setMessage]=useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/workstationget/infofromone");
        // console.log(res.data[0]);
        setOrders(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleworkstation2 = async(e) => {
    e.preventDefault();
    try {
      const res=await axios.put("/workstationcomponent/1",{
        id:order.order_id,
        quantity:order.quantity
      }); 
      console.log(res);
      setMessage(res.data)
      setShow(true);
      // alert(res.data);
    } catch (err) {
        console.log(err);
    }
    // alert("You clicked workstation2  !");
  };
  const handlespeaker = async(e) => {
    e.preventDefault();
    // 1->increment -1 decrement
    try {
      await axios.put("/workstationcomponent/1",{
        name:"speaker",
        id:order.order_id
      }); 
      setMessage("You have selected a speaker")
      setShow(true);
      // alert("You have selected a speaker");
    } catch (err) {
        console.log(err);
    }
    
  };
  const handlescreen = async(e) => {
    e.preventDefault();
    try {
      await axios.put("/workstationcomponent/1",{
        name:"screen",
        id:order.order_id
      }); 
      setMessage("You have selected a screen")
      setShow(true);
      // alert("You have selected a screen");
    } catch (err) {
        console.log(err);
    }
    
  };
  const handlebutton = async(e) => {
    e.preventDefault();
    try {
      await axios.put("/workstationcomponent/1",{
        name:"button",
        id:order.order_id
      }); 
      setMessage("You have selected a buttons")
      setShow(true);
      // alert("You have selected buttons");
    } catch (err) {
        console.log(err);
    }
    
  };

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
            <h1>Workstation 1</h1>
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
                            <td>{order?.model}</td>
                            <td>{order?.quantity}</td>
                          </tr>
                        )}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="text-center" border="light">
                  <Card.Body>
                    <Card.Header className="my-3">Current status</Card.Header>

                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Materials</th>
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

                    <Container>
                      <Row className="justify-content-md-center">
                        <Col>
                          <Button className="pbutton"
                            variant="primary"
                            size="lg"
                            onClick={handlespeaker}
                          >
                            {" "}
                            Speaker{" "}
                          </Button>{" "}
                        </Col>
                        <Col>
                          <Button className="pbutton"
                            variant="primary"
                            size="lg"
                            onClick={handlescreen}
                          >
                            {" "}
                            Screen{" "}
                          </Button>{" "}
                        </Col>
                        <Col>
                          <Button className="pbutton"
                            variant="primary"
                            size="lg"
                            onClick={handlebutton}
                          >
                            {" "}
                            Button{" "}
                          </Button>{" "}
                        </Col>
                      </Row>
                    </Container>
                  </Card.Body>
                </Card>
              </div>

              <div>
                <Card className="text-center" border="light">
                  <Card.Body>
                    <Card.Header className="my-3">Materials for B</Card.Header>

                    <Container>
                      <Row className="justify-content-md-center">
                        <Col>
                          <Button className="pbutton"
                            variant="primary"
                            size="lg"
                            onClick={handlespeaker}
                          >
                            {" "}
                            Speaker{" "}
                          </Button>{" "}
                        </Col>
                        <Col>
                          <Button className="pbutton"
                            variant="primary"
                            size="lg"
                            onClick={handlescreen}
                          >
                            {" "}
                            Screen{" "}
                          </Button>{" "}
                        </Col>
                        <Col>
                          <Button className="pbutton"
                            variant="primary"
                            size="lg"
                            onClick={handlebutton}
                          >
                            {" "}
                            Button{" "}
                          </Button>{" "}
                        </Col>
                      </Row>
                    </Container>
                  </Card.Body>
                </Card>
              </div>

              <div>
                <Stack gap={2} className="col-md-5 mx-auto">
                  <p></p>
                  <p></p>
                  <Button variant="secondary" onClick={handleworkstation2}>
                    Send workstation 2
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

export default WorkStation1;
