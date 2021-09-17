import React from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";
import { URL } from "../../constants/api";
import Heading from "../layout/Heading";

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

  const onSubmit = (info) => {
    async function postMsg() {
      await axios.post(URL + "messages", {
        name: info.name,
        email: info.email,
        message: info.message,
      });
    }

    postMsg();

    setSuccessMsg("Your inquiry is sent. You can expect a response within 7 working days.");
  };
  return (
    <div>
    <Heading content="Contact" />
      <div>
        <div>
          <div>
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
            <form
              id="contactForm"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label>Name</label>
                <input type="text" {...register("name")} />
                {errors.name && <span>{errors.name.message}</span>}
              </div>
              <div>
                <label>Email</label>
                <input type="email" {...register("email")} />
                {errors.email && <span>{errors.email.message}</span>}
              </div>
              <div>
                <label>Message</label>
                <textarea {...register("message")} />
                {errors.message && <span>{errors.message.message}</span>}
              </div>
              <p>{successMsg}</p>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};