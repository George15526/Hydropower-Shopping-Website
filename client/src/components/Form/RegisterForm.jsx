// RegisterForm.jsx
import {Button, Container, Form, Row, Col, Card} from "react-bootstrap";
import "./RegisterForm.scss"

function RegisterForm() {
    return (
        <section
            className="min-vh-100 bg-image"
            style={{
                backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
            }}
        >
            <div className="mask d-flex align-items-center min-vh-100 gradient-custom-3">
                <Container className="h-100">
                    <Row className="d-flex justify-content-center align-items-center h-100">
                        <Col xs={12} md={9} lg={7} xl={6} className="my-md-3">
                            <Card style={{ borderRadius: '15px', background: 'dimgray', color: 'white' }}>
                                <Card.Body className="p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                                    <Form>
                                        <Form.Group className="mb-4" controlId="formName">
                                            <Form.Label>Your Name</Form.Label>
                                            <Form.Control type="text" size="lg"/>
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="formEmail">
                                            <Form.Label>Your Email</Form.Label>
                                            <Form.Control type="email" size="lg"/>
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="formPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" size="lg"/>
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="formConfirmPassword">
                                            <Form.Label>Confirm your password</Form.Label>
                                            <Form.Control type="password" size="lg"/>
                                        </Form.Group>

                                        <Form.Group className="d-flex justify-content-center mb-5">
                                            <Form.Check
                                                type="checkbox"
                                                label={
                                                    <>
                                                        I agree all statements in <a href="#!" className="text-body"><u>Terms
                                                        of service</u></a>
                                                    </>
                                                }
                                            />
                                        </Form.Group>

                                        <div className="d-flex justify-content-center">
                                            <Button
                                                type="button"
                                                variant="success"
                                                size="lg"
                                                className="btn-block gradient-custom-4 text-body"
                                            >
                                                Sign Up
                                            </Button>
                                        </div>

                                        <p className="text-center text-muted mt-5 mb-0">
                                            Have already an account? <a href="#!" className="fw-bold text-body"><u>Login
                                            here</u></a>
                                        </p>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default RegisterForm;