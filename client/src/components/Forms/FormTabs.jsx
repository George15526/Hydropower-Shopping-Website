// RegisterForm.jsx
import { useState } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import "./FormTabs.scss"
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function FormTabs() {
    const [key, setKey] = useState('login');

    return (
        <section
            className="min-vh-100 bg-image"
            style={{
                backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
            }}
        >
    
        <div className="mask d-flex min-vh-100 gradient-custom-3">
            <Container className="mt-5 h-100">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col xs={12} md={9} lg={7} xl={6} className="my-md-3">
                        <Tabs
                            defaultActiveKey="profile"
                            transition={false}
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            id="uncontrolled-tab-example"
                            className="fs-5"
                            fill
                        >
                            <Tab eventKey="register" title="SignUp">
                                 <RegisterForm />
                            </Tab> 
                            <Tab eventKey="login" title="Login">
                                <LoginForm />
                            </Tab>                  
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </div>
        </section>
    );
}

export default FormTabs;