import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { URL } from "../../constants/api";
import AuthContext from "../context/AuthContext";
import Form from 'react-bootstrap/Form';
import Heading from '../layout/Heading';
import Container from 'react-bootstrap/Container'
import styles from './Login.module.css';
import wrapperstyle from '../layout/wrapperstyle.module.css';

const AUTH = "auth/local";
const url = URL + AUTH;

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Enter your username")
    .min(3, "Enter a valid username"),
  password: yup
    .string()
    .required("Enter your password")
    .min(8, "Your password must be at least 8 characters"),
});

  export const LogIn = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const history = useHistory();
  const [auth, setAuth] = useContext(AuthContext);
  console.log(auth);

  async function onSubmit(data) {

    setSubmitting(true);
    setLoginError(false);
    const body = {
      identifier: data.username,
      password: data.password,
    };

    try {
      const response = await axios.post(url, body);
      console.log(response, response.data);
      setAuth(response.data);
      history.push("/admin");
    } catch (error) {
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Container className={styles.loginContainer}>
      <Heading content="Log in" url="/" buttonContent="Back to homepage"/>
      <Form
        id="contactForm"
        onSubmit={handleSubmit(onSubmit)}
      >
      <p>{loginError}</p>
      <fieldset disabled={submitting} style={{ border: "none" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username or email adress</Form.Label>
          <Form.Control 
            type="text"
            {...register("username")}
            placeholder="Enter your username or your email adress."
          />
          <Form.Text className="text-muted">
            {errors.username && <span>{errors.username.message}</span>}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            {...register("password")}
            placeholder="Enter your password." 
          />
          <Form.Text className="text-muted">
            {errors.password && <span>{errors.password.message}</span>}
          </Form.Text>
        </Form.Group>
        <button>{submitting ? "logging in" : "Login"}</button>
        </fieldset>
      </Form>
      {/* <form
        id="contactForm"
        onSubmit={handleSubmit(onSubmit)}>
        <h2>Title</h2>
        <p>{loginError}</p>
        <fieldset disabled={submitting} style={{ border: "none" }}>
          <div>
            <label>Username</label>
            <input
              type="text"
              {...register("username")}
              placeholder="Enter your username."
            />
            {errors.username && <span>{errors.username.message}</span>}
          </div> */}
          {/* <div className="form-control">
            <label>Password</label>
            <input
              type="password"
              {...register("password")}
              placeholder="Enter your password."
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div> */}
{/* 
          <button>{submitting ? "logging in" : "Login"}</button>
        </fieldset>
      </form> */}
      <div className={`${wrapperstyle.wrapper} ${wrapperstyle.loginpage}`}></div>
    </Container>
  );
};