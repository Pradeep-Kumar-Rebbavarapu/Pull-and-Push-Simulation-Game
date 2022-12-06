import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { AuthContext } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";





const AdminSystemPage = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const  handlepullsystem=()=> {
    navigate("/adminassignrole")
  }
  function handlepushsystem() {
    alert("You clicked PUSH me!");
  }

  return (
    <div>
      <div>
        <Card className="text-center" border="light">
          <Card.Body>
            <Stack gap={2} className="col-md-5 mx-auto">
              <h1>Admin System Page</h1>
              <h2>
                <Badge bg="secondary">{currentUser?.username}</Badge>
              </h2>

              <Button variant="light" className="my-5" disabled>
                <h2>
                  <Badge bg="light" text="dark">
                    Choose System
                  </Badge>
                </h2>
              </Button>
              <Button variant="primary" onClick={handlepullsystem}>
                Pull System
              </Button>
              <Button variant="primary" onClick={handlepushsystem}>
                Push System
              </Button>
            </Stack>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AdminSystemPage;
