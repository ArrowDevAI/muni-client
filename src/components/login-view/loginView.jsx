import "./login-view.scss";
import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginView = ({ onLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            username: username,
            password: password
        };

        fetch("https://munidb-fb01ab798334.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.user && data.token) {
            
                localStorage.setItem("user", JSON.stringify(data.user));
            
                localStorage.setItem("token", data.token);
                
                // Call onLoggedIn callback with user and token
                onLoggedIn(data.user, data.token);
            } else {
                alert("Incorrect Username or Password");
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert(`An error occurred: ${error.message}`);
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    minLength="3"
                />
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength="3"
                />
            </Form.Group>

            <Button variant="primary" className='button' type="submit">Submit</Button>
        </Form>
    );
};

export default LoginView;
