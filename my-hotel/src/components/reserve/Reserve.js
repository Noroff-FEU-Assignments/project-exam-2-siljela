import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";
import { URL } from "../../constants/api";
import Form from 'react-bootstrap/Form';

const schema = yup.object().shape({
  name: yup.string().required("Enter your name"),
  email: yup
    .string()
    .required("Enter an email address")
    .email("Enter a valid email address"),
  checkInDate: yup.date().default(function () {
    return new Date();
  }),
  checkOutDate: yup.date().default(function () {
    return new Date();
  }),
  noOfGuests: yup.string(),
});

  export const Reserve = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [successMsg, setSuccessMsg] = useState("");

  const onSubmit = (customerDetails) => {
    async function postRes() {
      await axios.post(URL + "reservations", {
        name: customerDetails.name,
        email: customerDetails.email,
        checkInDate: customerDetails.checkInDate,
        checkOutDate: customerDetails.checkOutDate,
        noOfGuests: customerDetails.noOfGuests,
      });
    }
    postRes();
    setSuccessMsg(
      `Thank you. Your reservations has been sent.`
    );
  };

  return (
    <Form
    id="contactForm"
    onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Control placeholder="Name" {...register("name")}/>{errors.name && <span>{errors.name.message}</span>}
      </Form.Group>
      <Form.Group>
        <Form.Control type="email" placeholder="Email adress" {...register("email")}/>{errors.email && <span>{errors.email.message}</span>}
      </Form.Group>
      <Form.Group>
        <Form.Control type="date" {...register("checkInDate")}/>{errors.checkInDate && <span>{errors.checkInDate.message}</span>}
      </Form.Group>
      <Form.Group>
        <Form.Control type="date" {...register("checkOutDate")}/>{errors.checkOutDate && <span>{errors.checkOutDate.message}</span>}
      </Form.Group>
      <Form.Group>
        <Form.Control as="select" name="noOfGuests" {...register("noOfGuests")}>
          <option>Number of guests</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </Form.Control>
      </Form.Group>
          <p>{successMsg}</p>
          <button>Send</button>
    </Form>
  );
};
