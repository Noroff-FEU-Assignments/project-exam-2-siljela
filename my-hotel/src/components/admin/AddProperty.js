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
  img_url: yup.string().required("Please enter an image-url"),
  description: yup
    .string()
    .required("please add some description")
    .min(5, "description should be at least 5 charecters"),
  price: yup
    .number()
    .required("please add price per night")
    .positive()
    .integer(),
  pool: yup.string(),
  cleaning: yup.string(),
  parking: yup.string(),
  towels: yup.string(),
  breakfast: yup.string(),
});
export const AddProperty = () => {
  
  const addPropertyURL = URL + "properties";
  const history = useHistory();
  const [successMessage, setSuccessMessage] = useState("");
  const [auth] = useContext(AuthContext);

  if (!auth) {
    history.push("/login");
  }
  const {
    register,
    saving,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSave = (propertyDetails) => {
    console.log(propertyDetails);
    async function addProperty() {
      await axios.post(
        addPropertyURL,
        {
          name: propertyDetails.name,
          location: propertyDetails.location,
          img_url: propertyDetails.img_url,
          description: propertyDetails.description,
          price: parseFloat(propertyDetails.price),
          pool: propertyDetails.pool,
          cleaning: propertyDetails.cleaning,
          parking: propertyDetails.parking,
          towels: propertyDetails.towels,
          breakfast: propertyDetails.breakfast,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.jwt}`,
          },
        }
      );
    }
    addProperty();
    setSuccessMessage("Property added.");
  };

  return (
    <div>
      <form
        id="contactForm"
        onSave={saving(onSave)}
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
          <div>
            <label>Image URL</label>
            <input
              type="text"
              {...register("img_url")}
              placeholder="Image url"
            />
            {errors.img_url && <span>{errors.img_url.message}</span>}
          </div>
          <div>
            <label>Description</label>
            <textarea
              {...register("description")}
              placeholder="Description of the property"
            ></textarea>
            {errors.description && <span>{errors.description.message}</span>}
          </div>
          <div>
            <label>Price</label>
            <input type="number" {...register("price")} />
            {errors.price && <span>{errors.price.message}</span>}
          </div>
          <div>
            <label>Pool</label>
            <select name="type" {...register("pool")}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <label>Cleaning</label>
            <select name="type" {...register("cleaning")}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <label>Parking</label>
            <select name="type" {...register("parking")}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <label>Towels</label>
            <select name="type" {...register("towels")}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <label>Breakfast</label>
            <select name="type" {...register("breakfast")}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
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