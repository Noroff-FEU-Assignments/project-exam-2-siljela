import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { URL } from "../../constants/api";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import styles from './AddProperty.module.css';
import Container from 'react-bootstrap/Container';
import Heading  from '../content/Heading';
import BreadcrumbNavigation from '../content/BreadcrumbNavigation';
import wrapperstyle from '../layout/wrapperstyle.module.css';

const schema = yup.object().shape({
  name: yup.string().required("Enter property name"),
  location: yup.string().required("Enter property location"),
  img_url: yup.string().required("Enter an image-url"),
  description: yup
    .string()
    .required("Add a description")
    .min(5, "Description must be minimum 5 charecters"),
  price: yup
    .number()
    .required("Add price")
    .positive()
    .integer(),
  pool: yup.boolean().required("Select yes or no"),
  cleaning: yup.boolean().required("Select yes or no"),
  parking: yup.boolean().required("Select yes or no"),
  towels: yup.boolean().required("Select yes or no"),
  breakfast: yup.boolean().required("Select yes or no"),
});
export const AddProperty = () => {
  document.title = "Add property";
  const addURL = URL + "properties";
  const history = useHistory();
  const [confirmed, setConfirmed] = useState("");
  const [auth] = useContext(AuthContext);

  if (!auth) {
    history.push("/login");
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (propertyDetails) => {
    async function addProperty() {
      await axios.post(
        addURL,
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
    setConfirmed(`The property has been added.`);
  };

  return (
    <>
    <Container>
      <BreadcrumbNavigation currentPage="AddProperty" currentPageTitle="Add Property"/>
      <Heading content="Add Property" url="./admin" secondTitle="Fill in property details below" buttonContent="Back to admin overview"/>
      <Form id="contactForm" className={styles.addForm} onSubmit={handleSubmit(onSubmit)}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Property Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Name of new property" {...register("name")}/>
            {errors.name && <span>{errors.name.message}</span>}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Location
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Location of new property" {...register("location")}/>
            {errors.location && <span>{errors.location.message}</span>}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Image URL
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Image URL of new property" {...register("img_url")}/>
            {errors.img_url && <span>{errors.img_url.message}</span>}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Description
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Description of new property" {...register("description")}/>
            {errors.description && <span>{errors.description.message}</span>}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Price
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="number" {...register("price")}/>
            {errors.price && <span>Add a price</span>}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Select name="type" {...register("pool")}>
            <option>Pool</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Form.Select>
          {errors.pool && <span>Select yes or no</span>}
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Select name="type" {...register("cleaning")}>
            <option>Cleaning</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Form.Select>
          {errors.cleaning && <span>Select yes or no</span>}
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Select name="type" {...register("parking")}>
            <option>Parking</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Form.Select>
          {errors.parking && <span>Select yes or no</span>}
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Select name="type" {...register("towels")}>
            <option>Towels</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Form.Select>
          {errors.towels && <span>Select yes or no</span>}
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Select name="type" {...register("breakfast")}>
            <option>Breakfast</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Form.Select>
          {errors.breakfast && <span>Select yes or no</span>}
        </Form.Group>

        <p className="confirmed">{confirmed}</p>
        <button>Save</button>
        
      </Form>
    </Container>
    <div className={`${wrapperstyle.wrapper} ${wrapperstyle.addproperty}`}></div>
    </>
  );
};