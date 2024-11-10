import { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap'

const LoginForm = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const [loginError, setLoginError] = useState("");

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        setLoginError("");
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (!loginData.email || !loginData.password) {
            setLoginError("請輸入帳號密碼");
            return;
        }
        console.log('登入成功', loginData);
    }

  return (
    <Card style={{ borderRadius: '15px', background: 'dimgray', color: 'white' }}>
        <Card.Body className="p-5">
            <h2 className="text-uppercase text-center mb-5">Login</h2>
            <Form onSubmit={handleLoginSubmit}>
                {/* Email Column */}
                <Form.Group className="mb-4" controlId="formEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        size="lg" 
                        name="email"
                        onChange={handleLoginChange} 
                        value={loginData.email}
                    />
                </Form.Group>
                {/* Password Column */}
                <Form.Group className="mb-4" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        size="lg" 
                        name="password"
                        onChange={handleLoginChange} 
                        value={loginData.password} 
                    />
                </Form.Group>

                {/* loginError Message */}
                {loginError && <Alert variant="danger">{loginError}</Alert>}

                <div className="d-flex justify-content-center">
                    <Button
                        type="submit"
                        variant="success"
                        size="lg"
                        className="btn-block gradient-custom-4 text-body"
                    >
                        Login
                    </Button>
                </div>
            </Form>
        </Card.Body>
    </Card>
  )
};

export default LoginForm;