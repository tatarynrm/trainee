import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { addBlock } from "../../redux/block/blockSlice";
import { validationSchema } from "../../validator/BlockValidatior";
import Form from "react-bootstrap/Form";
import { useRef } from "react";

const FormCreate = () => {
  const fileRef = useRef();
  const dispatch = useDispatch();
  const [image, setImage] = useState(
    "https://www.lifewire.com/thmb/blKERZhp27lzE_9SjqlnovU0v-s=/1768x1326/smart/filters:no_upscale()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg"
  );
  const imgHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const resetInpFile = () => {
    fileRef.current.value = null;
  };
  return (
    <div className="form-create">
      <Formik
        initialValues={{ title: "", link: "", text: "", photo: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          dispatch(addBlock(values));
          setImage(
            "https://www.lifewire.com/thmb/blKERZhp27lzE_9SjqlnovU0v-s=/1768x1326/smart/filters:no_upscale()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg"
          );
          resetForm();
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <form className="form" onSubmit={handleSubmit}>
            <img src={image} alt="uploadimage" />
            <Form.Control
              ref={fileRef}
              type="file"
              accept="image/*"
              name="photo"
              onChange={(e) => imgHandler(e)}
              onBlur={handleBlur}
              value={values.image}
            ></Form.Control>

            <label htmlFor="title">??????????????????</label>
            <Form.Control
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            ></Form.Control>
            <p className="error">
              {errors.title && touched.title && errors.title}
            </p>
            <label htmlFor="link">??????????????????</label>
            <Form.Control
              type="text"
              name="link"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.link}
            ></Form.Control>
            <p className="error">
              {errors.link && touched.link && errors.link}
            </p>
            <label htmlFor="text">??????????</label>
            <Form.Control
              type="text"
              name="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.text}
            ></Form.Control>
            <p className="error">
              {errors.text && touched.text && errors.text}
            </p>

            <button
              className="btn btn-primary"
              type="submit"
              onClick={() => {
                setFieldValue("photo", image);
                resetInpFile();
              }}
            >
              ???????????????? ????????
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormCreate;
