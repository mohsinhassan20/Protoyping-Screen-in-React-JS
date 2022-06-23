import { Card, ListGroupItem, Button, ListGroup } from "react-bootstrap";

const Box = () => {
  return (
    <>
      <div
        className="box"
      
      >
        <Card
          style={{
            height: "40rem",
            width: "40rem",
          }}
        >
          <Card.Body
            style={{
              backgroundImage: `URL("bg.jpg")`,
              position: "absolute",
              right: "200px",
              top: "200px",
            }}
          >
            <Card.Title>Inventory Chart</Card.Title>
            <Card.Text>Representing Details in Graphs and Charts</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Box;
