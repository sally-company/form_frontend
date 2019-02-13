import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: 0px 10px 50px #555;
    background-color: #ffffff;
`;

const Title = styled.h1`
    width: 100%;
    text-align: center;
    color: #111;
    font-weight: lighter;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Label = styled.label`
    font-size: 0.8em;
    margin-bottom: 0.25em;
    color: #222;
    font-weight: lighter;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #cfcfcf;
    
    &::placeholder {
        font-size: 1.2em;
        font-weight: lighter;
        color: #999;
    }

    &:nth-child(1) {
        margin-top: 10px;
    }
    &:nth-child(2) {
        margin-top: 10px;
    }
`;

const LoginButton = styled.input`
    width: 100%;
    background-color: #519e8a;
    color: #fff;
    border: 2px solid #fff;
    width: 100%;
    margin-top: 1em;
    padding: 8px 0px;
    font-size: 1em;
    letter-spacing: 1px;
    margin-bottom: 0.25em;
    outline: none;
    &:hover {
        color: #519e8a;
        background-color: #fff;
        border: 2px solid #519e8a;
    }
`;

const AdminLoginForm = (props) => (
    <Container>
        <FormContainer>
            <Title>Form</Title>
            <Form onSubmit={props.handleSubmit}>
                <Input 
                    type={`text`} 
                    placeholder={`Username`}
                    name={`username`}
                    value={props.usernameValue}
                    onChange={props.handleInputChange}
                />
                <Input 
                    type={`password`} 
                    placeholder={`Password`}
                    name={`password`}
                    value={props.passwordValue}
                    onChange={props.handleInputChange}
                />
                <LoginButton type={`submit`} value={`Login`}/>
            </Form>
        </FormContainer>
    </Container>
);

AdminLoginForm.propTypes = {
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default AdminLoginForm;