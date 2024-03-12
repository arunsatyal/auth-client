import { Link, useNavigate } from "react-router-dom";

import {
  Card,
  Col,
  Container,
  Form,
  Row,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Container className="vh-100 d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <Card className="bg-white p-4" style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Title className="fs-1 fw-bold mb-5">Log In</Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <FloatingLabel label="Email address" className="mb-3">
                      <Form.Control
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        // autoComplete="off"
                        placeholder=""
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group>
                    <FloatingLabel label="Password" className="mb-3">
                      <Form.Control
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        // autoComplete="off"
                        placeholder=""
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <Button
                    type="submit"
                    size="lg"
                    variant="success"
                    className="w-100"
                  >
                    Log In
                  </Button>
                </Form>
                <Card.Text className="mt-5 text-center">
                  <span className="text-muted">New to our app?</span>
                  <br />
                  <Link
                    to="/register"
                    className="btn btn-lg btn-outline-secondary w-100 mt-3"
                  >
                    Create an account
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
