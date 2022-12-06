import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import ListGroup from 'react-bootstrap/ListGroup';



const Home = () => {
  const {currentUser,logout} =useContext(AuthContext);
  // const [err, setError] = useState(null);
  const navigate=useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      // setError(err.response.data);
      console.log(err.response.data);
    }
  };
  return (
    
      
     
            <div>
              Home

            {currentUser ? <span style={{"cursor":"pointer"}} onClick={handleLogout}>Logout</span> : <Link className="link" to={'/login'}>Login</Link>}

              <Card className="text-center" border="light">
                        
                        <Card.Body>
                        <Stack gap={2} className="col-md-5 mx-auto">
                        <h1>Push and Pull System</h1>
                        </Stack>

                        </Card.Body>

              </Card>

              <Card>
                      
                        <Card>
                            <Card.Header as="h5">Introduction</Card.Header>
                            <Card.Body>
                            <ListGroup as="ol" numbered>
                                  <ListGroup.Item as="li">
                                    
                                    This is  a multiplayer simulation game that can be used to teach the concept of push and Pull system.
                                  </ListGroup.Item>
                                  
                                  
                                  <ListGroup.Item as="li">
                                  Push systems and pull systems are supply chain management strategies that are used depending on the uncertainty of the demand for a product.

                                  
                                  </ListGroup.Item>
                                  
                                  
                                  <ListGroup.Item as="li">
                                    
                                  The pull system is a lean manufacturing strategy where goods are produced according to actual demand.

                                  
                                  </ListGroup.Item>

                                  <ListGroup.Item as="li">
                                    
                                  While, in the push system a company produces goods according to a demand forecast.

                                  
                                  </ListGroup.Item>


                             </ListGroup>
                            </Card.Body>
                        </Card>


                        <Card>
                            <Card.Header as="h5">Pull System</Card.Header>
                            <Card.Body>
                              <Card.Text>
                              A pull system is a lean manufacturing strategy used to reduce waste in the production process.
                               In this type of system, components used in the manufacturing process are only replaced once they have been 
                               consumed so companies only make enough products to meet customer demand. This means all of the company's resources are used for producing goods that will immediately be sold and return a profit.
                              </Card.Text>
                          
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Header as="h5">Push System</Card.Header>
                            <Card.Body>
      
                              <Card.Text>
                                The push system of inventory control involves forecasting inventory needs to meet customer demand.
                               Companies predict which products customers will purchase along with determining what quantity of goods will be purchased. The company will in turn produce enough product to meet the forecast demand and sell, or push, the goods to the consumer.
                              </Card.Text>
                
                            </Card.Body>
                        </Card>


                        <Card>
                            <Card.Header as="h5">Instruction</Card.Header>
                            <Card.Body>
                              <Card.Title>Special title treatment</Card.Title>
                              <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                              </Card.Text>
                              <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

               </Card>
            </div>




     
    
  )
}

export default Home;


