import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";
import { URL } from "../../constants/api";
import Heading from "../layout/Heading";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import wrapperstyle from '../layout/wrapperstyle.module.css';
import BreadcrumbNavigation from '../content/items/BreadcrumbNavigation';
import styles from './Contact.module.css';

const schema = yup.object().shape({
  name: yup.string().required("Fill in your name"),
  email: yup
    .string()
    .required("Fill in your email address")
    .email("Fill in your email address"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "The message must be at least 10 characters"),
});

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [successMsg, setSuccessMsg] = useState("");

  const onSubmit = (customerDetails) => {
    async function postMsg() {
      await axios.post(URL + "messages", {
        name: customerDetails.name,
        email: customerDetails.email,
        message: customerDetails.message,
      });
    }

    postMsg();
    setSuccessMsg("Your inquiry is sent. You can expect a response within 7 working days.");
  };
  
  return (
    <Container>
      <BreadcrumbNavigation currentPage="Contact" currentPageTitle="Contact us"/>
      <Heading content="Contact" buttonContent="Back to homepage" url="/"/>
        <div className={styles.formArea}>
          <div>
            <p>Some text</p>
            <div>
              <div>
                +00 00 00 00 00
              </div>
            </div>
            <div>
              <div>
                Email
              </div>
              <div>
                contact@holidaze.co
              </div>
            </div>
            <div>
              <div>
                Address
              </div>
              <div>
                Address
              </div>
            </div>
          </div>
          <Form
            id="contactForm"
            onSubmit={handleSubmit(onSubmit)}
          >
          <Form.Group className="mb-3">
              <Form.Control placeholder="First name" {...register("name")}/>
              {errors.name && <span>{errors.name.message}</span>}
          </Form.Group>
          <Form.Group>
            <Form.Control type="email" placeholder="name@example.com" {...register("email")}/>
            {errors.email && <span>{errors.email.message}</span>}
          </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} {...register("message")}/>
            </Form.Group>
            <p>{successMsg}</p>
            <button>Send</button>
          </Form>
          </div>
        <div className={`${wrapperstyle.wrapper} ${wrapperstyle.contactpage}`}></div>
    </Container>
  );
};