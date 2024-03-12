import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

// const USER_API_URL = `${import.meta.env.VITE_APP_API_BASE_URL}`;

const SignupPage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row>
        <Col>
          <Card className="bg-white p-4" style={{ width: "30rem" }}>
            <Card.Body>
              <Card.Title className="fs-1 fw-bold mb-5">Register</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <FloatingLabel label="Your full name" className="mb-3">
                    <Form.Control
                      type="text"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      // autoComplete="off"
                      placeholder=""
                    />
                  </FloatingLabel>
                </Form.Group>

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
                  Register
                </Button>
              </Form>
              <Card.Text className="mt-5 text-center">
                <span className="text-muted">Already registered with us?</span>
                <br />
                <Link
                  to="/login"
                  className="btn btn-lg btn-outline-secondary w-100 mt-3"
                >
                  Log In
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
