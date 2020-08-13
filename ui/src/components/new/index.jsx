import React, { useCallback } from 'react';

import { Formik, Form, Field } from 'formik';

import './styles.css';

const PanelNew = () => {
  const handler = useCallback(async (values) => {
    // TODO: Send the data to the backend
    console.log(values);
  });

  return (
    <div className="panel-new-wrapper">
      <h1>Add a new real estate here</h1>
      <Formik
        initialValues={{ address: '', area: '' }}
        onSubmit={handler}
      >
        <Form>
          <Field
            name="address"
            type="text"
            placeholder="Address of the real estate"
          />
          <Field
            name="area"
            type="number"
            placeholder="Area of the real estate in m²"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default PanelNew;
