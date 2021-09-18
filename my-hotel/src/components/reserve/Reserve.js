import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";
import { URL } from "../../constants/api";

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

  export const Reserve = ({ properties }) => {
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
      await axios.post(URL + "/reservations", {
        name: customerDetails.name,
        email: customerDetails.email,
        checkInDate: customerDetails.checkInDate,
        checkOutDate: customerDetails.checkOutDate,
        noOfGuests: parseFloat(customerDetails.noOfGuests),
      });
    }
    postMessage();
    setSuccessMessage(
      `Thank you ${customerDetails.name}. Your reservations has been confirmed.`
    );
  };

  return (
    <div>
      <div>
        <header>
          <p>
            Excellent choice! Please fill in the form to complete your reservation
            for <span>{properties.name}</span>
          </p>
        </header>

        <form
          id="contactForm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
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
          </div>
          <p>
            *Please recheck evrything before submitting the form. We wish you a
            pleasant stay in our hotel.
          </p>
          <p>{successMessage}</p>
          <Button>Confirm reservation</Button>
        </form>
      </div>
    </div>
  );
};
