import Input from "./common/input";
import PageHeader from "./common/pageHeader";
import { useFormik } from "formik";
import Joi from "joi";
import { formikValidateUsingJoi } from "../utils/formikValidateUsingJoi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import cardsService from "../services/cardsService";
import { toast } from "react-toastify";

const CardCreate = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    validate: formikValidateUsingJoi({
      bizName: Joi.string().min(2).max(255).required().label("Name"),
      bizDescription: Joi.string()
        .min(2)
        .max(1024)
        .required()
        .label("Description"),
      bizAddress: Joi.string().min(2).max(400).required().label("Address"),
      bizPhone: Joi.string()
        .min(9)
        .max(10)
        .required()
        .regex(/^0[2-9]\d{7,8}$/)
        .label("Phone"),
      bizImage: Joi.string().min(11).max(1024).allow("").label("Image"),
    }),
    async onSubmit(values) {
      try {
        const { bizImage, ...body } = values;
        if (bizImage) {
          body.bizImage = bizImage;
        }
        cardsService.createCard(body);
        toast.success("card created successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/my-cards");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  return (
    <div className="row d-flex justify-content-center align-items-center h-100 my-4">
      <div
        style={{ backgroundColor: "#b2bFBE" }}
        className="col-12 col-md-6 col-lg-6 col-xl-4 border rounded px-3 pb-3"
      >
        <PageHeader
          title="Create card"
          description="Create a new card, it is fun "
        />

        <form onSubmit={form.handleSubmit} noValidate>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="form-outline mb-3">
            <Input
              {...form.getFieldProps("bizName")}
              type="text"
              label="Name"
              required
              error={form.touched.bizName && form.errors.bizName}
            />
          </div>
          <div className="form-outline mb-3">
            <Input
              {...form.getFieldProps("bizDescription")}
              type="text"
              label="Description"
              required
              error={form.touched.bizDescription && form.errors.bizDescription}
            />{" "}
          </div>
          <div className="form-outline mb-3">
            <Input
              {...form.getFieldProps("bizAddress")}
              type="text"
              label="Address"
              required
              error={form.touched.bizAddress && form.errors.bizAddress}
            />{" "}
          </div>
          <div className="form-outline mb-3">
            <Input
              {...form.getFieldProps("bizPhone")}
              type="text"
              label="Phone"
              required
              error={form.touched.bizPhone && form.errors.bizPhone}
            />
          </div>
          <div className="form-outline mb-3">
            <Input
              {...form.getFieldProps("bizImage")}
              type="text"
              label="Image"
              error={form.touched.bizImage && form.errors.bizImage}
            />{" "}
          </div>

          <div className="my-2">
            <button
              type="submit"
              disabled={!form.isValid}
              className="btn btn-primary"
            >
              Create Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardCreate;
