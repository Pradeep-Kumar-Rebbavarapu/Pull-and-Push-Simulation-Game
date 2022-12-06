import React,{useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../context/authContext';

const Customer=()=>{
  const [inputs,setInputs]=useState({
    model: "",
    color:"",
    quantity: "",
    recieving_time:moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
  })
  const {currentUser} =useContext(AuthContext);
  const [err, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(inputs);
    try {
      const res=await axios.post('/orders',inputs);
      navigate(`/orderlist/${currentUser?.username}`);
    } catch (error) {
      setError(err.response.data);
    }
  }

  return (
    <div>
    

    <Card className="text-center" border="light">
      
      <Card.Body>
      <Stack gap={2} className="col-md-5 mx-auto">
      <h1>Place an Order</h1>

      <Card.Header className="my-3">{currentUser?.username} </Card.Header>
      <Card.Header className="my-3">Product Details : </Card.Header>
    
      
        <Form >


              <Form.Group className="mb-3" controlId="formBasicModel">
                <Form.Label>Model</Form.Label>
                <Form.Control required name='model' type="text" placeholder="Enter Model" onChange={handleChange}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicModelColor">
                <Form.Label>Model Color</Form.Label>
                <Form.Control required name='color' type="text" placeholder="Enter Color" onChange={handleChange}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control required name='quantity' type="text" placeholder="Enter Quantity" onChange={handleChange} />
              </Form.Group>
              
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Order
              </Button>
            </Form>

            </Stack>
    </Card.Body>

    </Card>




    </div>
  );
}

export default Customer;