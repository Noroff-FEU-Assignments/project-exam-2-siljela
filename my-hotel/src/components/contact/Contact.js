import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";
import { URL } from "../../constants/api";
import Heading from "../content/Heading";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import wrapperstyle from '../layout/wrapperstyle.module.css';
import BreadcrumbNavigation from '../content/BreadcrumbNavigation';
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
  document.title = "Contact Holidaze";
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
    setSuccessMsg("Your message has been sent. You will hear from us shortly.");
  };
  
  return (
    <Container>
      <BreadcrumbNavigation currentPage="Contact" currentPageTitle="Contact us"/>
      <Heading content="Contact" buttonContent="Back to homepage" url="/"/>
        <div className={styles.formArea}>
          <div className={styles.contactDetails}>
            <h3>Contact details</h3>
            <p>Adress: Address Street 22, 00000 CA</p>
            <p>Phone number: +00 00 00 00 00</p>
            <p>Fill in the form below if you wish to contact us by email.</p>
          </div>
          <Form
            id="contactForm"
            onSubmit={handleSubmit(onSubmit)}
          >
          <Form.Group className="mb-3">
              <Form.Control placeholder="Your name" {...register("name")}/>
              {errors.name && <span>{errors.name.message}</span>}
          </Form.Group>
          <Form.Group>
            <Form.Control type="email" placeholder="Email address" {...register("email")}/>
            {errors.email && <span>{errors.email.message}</span>}
          </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" placeholder="Request/question" rows={3} {...register("message")}/>
              {errors.message && <span>{errors.message.message}</span>}
            </Form.Group>
            <p>{successMsg}</p>
            <button>Send</button>
          </Form>
          </div>
        <div className={`${wrapperstyle.wrapper} ${wrapperstyle.contactpage}`}></div>
    </Container>
  );
};