import { Button } from "antd";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const initialValues = { name: "", email: "", password: "" };
const handleSubmit = (values) => {
  console.log(values);
};

const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Too short")
    .max(15, "Too long"),
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character'),
});

const Registration = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Registration</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registrationSchema}
      >
        <Form>
          <div>
            <label htmlFor="name" style={{ display: "block" }}>
              Name:{" "}
            </label>
            <Field id="name" name="name" placeholder="Name" />
            <ErrorMessage
              name="name"
              component="div"
              style={{ color: "red", fontSize: ".9em" }}
            />
          </div>

          <div>
            <label htmlFor="email" style={{ display: "block" }}>
              Email:{" "}
            </label>
            <Field id="email" name="email" type="email" placeholder="Email" />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red", fontSize: ".9em" }}
            />
          </div>

          <div>
            <label htmlFor="password" style={{ display: "block" }}>
              Password:{" "}
            </label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red", fontSize: ".9em" }}
            />
          </div>

          <Button type="primary" htmlType="submit">
            Send{" "}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default Registration;
