import React, { useCallback } from 'react';
import { Formik, Form, Field } from 'formik';

import useInput from '../../hooks/useInput';

import './styles.css';

const PanelNew = () => {
  const address = useInput('');
  const size = useInput('');

  const handleNewEstate = useCallback(async () => {
    const estateData = {
      address: address.value,
      size: size.value,
    };

    const res = await fetch('/estate/new', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({ estateData }),
    });
    console.log('--------------------->', res.body);
  });

  return (
    <div className="panel-new-wrapper">
      <h1>Add a new real estate here</h1>
      <Formik
        initialValues={{ address: '', size: '' }}
        onSubmit={handleNewEstate}
      >
        <Form>
          <Field
            value={address.value}
            onChange={address.onChange}
            name="address"
            type="text"
            placeholder="Address of the real estate"
          />
          <Field
            value={size.value}
            onChange={size.onChange}
            name="size"
            type="number"
            placeholder="Size of the real estate in m²"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default PanelNew;
