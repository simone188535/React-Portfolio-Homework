import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
  return (
    <section className="contact row mx-auto">
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("A name is required."),
          email: Yup.string()
            .email("Invalid email address")
            .required("A email is required."),
          message: Yup.string().required("A message is required."),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert('Demo Form Submitted!');
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="col">
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" className="d-block w-100 my-2"/>
          <ErrorMessage component="div" name="name" className="text-danger"/>

          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" className="d-block w-100 my-2"/>
          <ErrorMessage component="div" name="email" className="text-danger"/>

          <label htmlFor="message">Message</label>
          <Field name="message" as="textarea" className="d-block w-100 my-2"/>
          <ErrorMessage component="div" name="message" className="text-danger"/>

          <button type="submit" class="btn btn-danger mt-1">Submit</button>
        </Form>
      </Formik>
    </section>
  );
};

export default Contact;
