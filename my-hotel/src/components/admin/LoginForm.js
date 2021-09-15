// import Heading from "../layout/Heading";

import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { API_LOGIN } from "../../constants/api";
import Form from "react-bootstrap/Form";
import AuthContext from "../context/AuthContext";

const url = API_LOGIN;

const schema = yup.object().shape({
    identifier: yup.string().required("Enter a valid username"),
    password: yup.string().required("Enter a valid password"),
  });

  export default function LoginForm({ handleClose }) {
  const [loginError, setLoginError] = useState(null);  
  const [submit, setSubmit] = useState(false);
    
    // const [showToast, setShowToast] = useState(false);
    // const [toastType, setToastType] = useState("");
    // const [toastAction, setToastAction] = useState("");
  
    const { register, handleSubmit, errors } = useForm({
      resolver: yupResolver(schema),
    });
  
    const [, setAuth] = useContext(AuthContext);
    
    async function onSubmit(data) {
        setLoginError(null);
        setSubmit(true);
      

      console.log(data);

      try {
        await axios.post(url, data).then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            
            setAuth(response.data);
            //  setShowToast(true);
            //  setToastType("success");
            //  setToastAction("login");
            //  setTimeout(() => setShowToast(false), 1500);
              setTimeout(() => handleClose(), 1000);
          }
        });
      } catch (error) {
        console.log("error", error);
        //  setShowToast(true);
        //  setToastType("fail");
        //  setToastAction("login");
        //  setTimeout(() => setShowToast(false), 1000);
        setLoginError(error.toString());
      } finally {
        setSubmit(false);
      }
    }

  return (
    <>
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="identifier"
              defaultValue="admin@admin.com"
              ref={register}
            />
            {errors.identifier && (
              <div>{errors.identifier.message}</div>
            )}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              placeholder="Pass1234"
              defaultValue="Pass1234"
              ref={register}
              type="password"
            />
            {errors.password && (
              <div>{errors.password.message}</div>
            )}
            {loginError && (
              <h4>Login failed</h4>
            )}
          </Form.Group>
          <button>
            {submit ? "Loggin in..." : "Login"}
          </button>
          <button onClick={handleClose}>Close</button>
        </fieldset>
      </Form>
        {/* <Toasts type={toastType} action={toastAction} showToast={showToast} /> */}
      </>
    );
  }

// export default LoginForm
