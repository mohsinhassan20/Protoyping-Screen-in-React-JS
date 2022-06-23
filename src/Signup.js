import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Signup.css";
function Signup() {
  return (
    <>
      <div
        className="box container  border  content"
        style={{
          width: `50vh`,
        }}
      >
        <Form>
          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Control className="bg" type="text" placeholder="Full Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              className="text-primary"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              className="text-primary"
              placeholder="Confirm Password"
            />
          </Form.Group>
          <Button id="btn" variant="primary" type="submit">
            Continue
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Signup;
