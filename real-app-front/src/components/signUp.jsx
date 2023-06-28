import Input from "./common/input";
import PageHeader from "./common/pageHeader";
import { useFormik } from "formik";
import Joi from "joi";
import { formikValidateUsingJoi } from "../utils/formikValidateUsingJoi";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/auth.context";
import { Checkbox } from "./common/checkbox";
import { NavLink } from "react-router-dom";

const SignUp = ({ redirect = "/" }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user, createUser, login } = useAuth();

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@%$#^&*\-_])(?=(.*\d){4,})[a-zA-Z!@%$#^&*\-_\d]{8,}$/;

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
      name: "",
      biz: false,
    },
    validate: formikValidateUsingJoi({
      name: Joi.string().min(2).max(255).required().label("Name"),
      email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email({ tlds: { allow: false } })
        .label("Email"),
      password: Joi.string()
        .min(6)
        .max(1024)
        .required()
        .regex(passwordRegex)
        .label("Password")
        .messages({
          "string.pattern.base": `The password must contain at least 8 characters, 1 uppercase, 1 lowercase and 1 spacial sign`,
        }),
      biz: Joi.boolean(),
    }),
    async onSubmit(values) {
      try {
        await createUser({ ...values });
        await login({ email: values.email, password: values.password });
        navigate(redirect);
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="row d-flex justify-content-center align-items-center h-100 my-4">
      <div
        style={{ backgroundColor: "#b2bFBE" }}
        className="col-12 col-md-6 col-lg-6 col-xl-4 border rounded px-3 pb-3"
      >
        <PageHeader
          title="Sign Up to bizCard4U"
          description="Open a new account, it is free "
        />

        <form onSubmit={form.handleSubmit} noValidate>
          {error && <div className="alert alert-danger">{error}</div>}

          <Input
            {...form.getFieldProps("email")}
            type="email"
            label="Email"
            required
            error={form.touched.email && form.errors.email}
          />
          <Input
            {...form.getFieldProps("password")}
            type="password"
            label="Password"
            required
            error={form.touched.password && form.errors.password}
          />
          <Input
            {...form.getFieldProps("name")}
            type="text"
            label="Name"
            required
            error={form.touched.name && form.errors.name}
          />
          <Checkbox
            {...form.getFieldProps("biz")}
            label="sign up as business account?"
            type="checkbox"
            error={form.touched.biz && form.errors.biz}
          />

          <div className="my-2">
            <button
              type="submit"
              disabled={!form.isValid}
              className="btn btn-primary"
            >
              Sign Up
            </button>
          </div>
          <p className="text-center mt-2 mb-0">
            Need an account?{" "}
            <NavLink to="/sign-up" className="fw-bold">
              Sign Up
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
