import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";
import { URL } from "../../constants/api";
import Form from 'react-bootstrap/Form'

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

  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (customerDetails) => {
    async function postMessage() {
      await axios.post(URL + "reservations", {
        name: customerDetails.name,
        email: customerDetails.email,
        checkInDate: customerDetails.checkInDate,
        checkOutDate: customerDetails.checkOutDate,
        noOfGuests: parseFloat(customerDetails.noOfGuests),
      });
    }
    postMessage();
    setSuccessMessage(
      `Thank you. Your reservations has been confirmed.`
    );
  };

  return (
    <Form
    id="contactForm"
    onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Control placeholder="Name" {...register("name")}>{errors.name && <span>{errors.name.message}</span>}</Form.Control>
        <Form.Control type="email" placeholder="Email adress" {...register("email")}>{errors.email && <span>{errors.email.message}</span>}</Form.Control>
        <Form.Control type="date" {...register("checkInDate")}>{errors.checkInDate && <span>{errors.checkInDate.message}</span>}</Form.Control>
        <Form.Control type="date" {...register("checkOutDate")}>{errors.checkOutDate && <span>{errors.checkOutDate.message}</span>}</Form.Control>
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
        
          {/* <div>
            <div>
              <label>Full Name</label>
              <input
                type="text"
                {...register("name")}
                placeholder="Enter your full name"
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                {...register("email")}
                placeholder="Enter your email"
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>
          </div>
          <div>
            <div>
              <label>Check in date</label>
              <input
                type="date"
                {...register("checkInDate")}
              />
              {errors.checkInDate && <span>{errors.checkInDate.message}</span>}
            </div>
            <div>
              <label>Check out date</label>
              <input
                type="date"
                {...register("checkOutDate")}
              />
              {errors.checkOutDate && (
                <span>{errors.checkOutDate.message}</span>
              )}
            </div>
          </div>
          <div>
            <div>
              <label>Number of guests</label>
              <select name="noOfGuests" {...register("noOfGuests")}>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div> */}
          
          <p>{successMessage}</p>
          <Button variant="primary" type="submit">Submit reservation</Button>

    </Form>
  );
};
