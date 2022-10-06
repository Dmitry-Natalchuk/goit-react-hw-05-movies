import { Formik,Field,Form } from 'formik';

export const MoviesForm = ({ onSubmit, value }) => {
    return (
      <Formik
        initialValues={{ query: value ?? '' }}
        onSubmit={values => {
          onSubmit(values);
        }}
      >
        <Form>
          <Field
            type="text"
            name="query"
            placeholder=" Please enter movie name"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
  };