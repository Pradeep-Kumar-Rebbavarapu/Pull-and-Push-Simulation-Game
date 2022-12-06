import React from "react";
import Table from "react-bootstrap/Table";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import copy from "copy-to-clipboard"; 
const AdminAssignRoles = () => {

  const  handleSubmit=(text)=>{
    alert(`You have copied the "${text}"`);
  }

  return (
    <div>
      <Card className="text-center" border="light">
        <Card.Body>
          <Stack gap={2} className="col-md-5 mx-auto">
            <h1>Admin Assign Roles Page</h1>
            <Card.Header className="my-3">Assign Roles </Card.Header>
          </Stack>
        </Card.Body>
      </Card>
      <Card className="text-center" border="light">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Roles</th>
            {/* <th>Link</th> */}
            <th>Copy the Link to Clipboard</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Production Manager</td>
            {/* <td>http://localhost:3000/productionmanager</td> */}
            <td>
              <Button variant="primary" type="submit" onClick={() =>  {
                navigator.clipboard.writeText('http://localhost:3000/productionmanager');
                handleSubmit('http://localhost:3000/productionmanager');
                }} >
                Copy
              </Button>
            </td>
          </tr>
          <tr>
            <td>Production Engineer</td>
            {/* <td>http://localhost:3000/productionengineer</td> */}
            <td>
            <Button variant="primary" type="submit" onClick={() =>  {
                navigator.clipboard.writeText('http://localhost:3000/productionengineer');
                handleSubmit('http://localhost:3000/productionengineer');
                }} >
                Copy
              </Button>
            </td>
          </tr>
          <tr>
            <td> Operator 1</td>
            {/* <td>http://localhost:3000/op1</td> */}
            <td>
            <Button variant="primary" type="submit" onClick={() =>  {
                navigator.clipboard.writeText('http://localhost:3000/op1');
                handleSubmit('http://localhost:3000/op1');
                }} >
                Copy
              </Button>
            </td>
          </tr>
          <tr>
            <td>Operator 2</td>
            {/* <td>http://localhost:3000/op2</td> */}
            <td>
            <Button variant="primary" type="submit" onClick={() =>  {
                navigator.clipboard.writeText('http://localhost:3000/op2');
                handleSubmit('http://localhost:3000/op2');
                }} >
                Copy
              </Button>
            </td>
          </tr>
          <tr>
            <td>Operator 3</td>
            {/* <td>http://localhost:3000/op3</td> */}
            <td>
            <Button variant="primary" type="submit" onClick={() =>  {
                navigator.clipboard.writeText('http://localhost:3000/op3');
                handleSubmit('http://localhost:3000/op3');
                }} >
                Copy
              </Button>
            </td>
          </tr>
          <tr>
            <td>Operator 4</td>
            {/* <td>http://localhost:3000/op4</td> */}
            <td>
            <Button variant="primary" type="submit" onClick={() =>  {
                navigator.clipboard.writeText('http://localhost:3000/op4');
                handleSubmit('http://localhost:3000/op4');
                }} >
                Copy
              </Button>
            </td>
          </tr>
          <tr>
            <td>Operator 5</td>
            {/* <td>http://localhost:3000/op5</td> */}
            <td>
            <Button variant="primary" type="submit" onClick={() =>  {
                navigator.clipboard.writeText('http://localhost:3000/op5');
                handleSubmit('http://localhost:3000/op5');
                }} >
                Copy
              </Button>
            </td>
          </tr>
          <tr>
            <td>Customer</td>
            {/* <td>http://localhost:3000/customer</td> */}
            <td>
            <Button variant="primary" type="submit" onClick={() =>  {
                navigator.clipboard.writeText('http://localhost:3000/customer');
                handleSubmit('http://localhost:3000/customer');
                }} >
                Copy
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      </Card>

    </div>
  );
};

export default AdminAssignRoles;
