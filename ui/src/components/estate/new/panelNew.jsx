import React, { useCallback, useState } from 'react';
import { Formik, Form, Field } from 'formik';

import useInput from '../../../hooks/useInput';

import './styles.css';

const PanelNew = () => {
  const [success, setSuccess] = useState(false);
  const address = useInput('');
  const size = useInput('');

  const handleNewEstate = useCallback(async () => {
    const newEstateData = {
      address: address.value,
      size: size.value,
    };

    await fetch('http://localhost:4000/api/estate/new', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ newEstateData }),
    });

    setSuccess(true);
  });

  return (
    <div className="panel-new-wrapper">
      <h1>Add a new real estate here</h1>
      { success && <p style={{ color: 'green' }}>New estate successfully added!</p> }
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
