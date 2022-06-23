import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
function Login() {
  return (
    <>
      <div className="content">
        <div
          className="box container  border "
          style={{
            width: `50vh`,
          }}
        >
          <Form>
            <Form.Group className="m-5" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="m-5" controlId="formBasicPassword">
              <Form.Control
                type="password"
                className="text-primary"
                placeholder="Password"
              />
            </Form.Group>
            <Button id="btn" variant="primary" className="mb-5" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
