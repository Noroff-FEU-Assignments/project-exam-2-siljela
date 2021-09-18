import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { URL } from "../../constants/api";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const schema = yup.object().shape({
  name: yup.string().required("Please enter property name"),
  location: yup.string().required("Please enter property"),

  description: yup
    .string()
    .required("please add some description")
    .min(5, "description should be at least 5 charecters"),
  price: yup
    .number()
    .required("please add price per night")
    .positive()
    .integer(),
  type: yup.string(),
});
export const AddProperty = () => {
  const addPropertyURL = URL + "properties";
  const history = useHistory();
  const [successMessage, setSuccessMessage] = useState("");
  const [auth] = useContext(AuthContext);

  if (!auth) {
    history.push("/admin");
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (info) => {
    console.log(info);
    async function postMessage() {
      await axios.post(
        addPropertyURL,
        {
          name: info.name,
          location: info.location,
          description: info.description,
          Type: info.type,
          price: parseFloat(info.price),
        },
        {
          headers: {
            Authorization: `Bearer ${auth.jwt}`,
          },
        }
      );
    }
    postMessage();
    setSuccessMessage("Property added.");
  };

  return (
    <div>
      <form
        id="contactForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div>
            <label>Property Name</label>
            <input
              type="text"
              {...register("name")}
              placeholder="Name of the new property"
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <div>
            <label>Location</label>
            <input
              type="text"
              {...register("location")}
              placeholder="Location of the property"
            />
            {errors.location && <span>{errors.location.message}</span>}
          </div>
        </div>
        <div>
          <div>
            <label>Description</label>
            <textarea
              {...register("description")}
              placeholder="Description of the property"
            ></textarea>
            {errors.description && <span>{errors.description.message}</span>}
          </div>
          <div>
            <label>Type of property</label>
            <select name="type" {...register("type")}>
              <option value="property">Property</option>
              <option value="guesthouse">GuestHouse</option>
              <option value="bandb">B&B</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <label>Price</label>
            <input type="number" {...register("price")} />
            {errors.price && <span>{errors.price.message}</span>}
          </div>
        </div>
        <p>
          *Please recheck everything before submitting the form.
        </p>
        <p className="successMessage">{successMessage}</p>
        <Button>Save</Button>
      </form>
    </div>
  );
};