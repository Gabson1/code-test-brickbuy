import React, { useCallback, useEffect, useState } from 'react';
import './styles.css';

const PanelExisting = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  // Handles sending the request to the api
  const fetchExistingEstateData = useCallback(async () => {
    try {
      const res = await fetch('http://localhost:4000/api/estate/all', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const estateData = await res.json(res);

      setData(estateData);
      setLoading(false);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(`%c There was a problem: ${err}`, 'background: #222; color: white; border: 1px dotted white; padding: 10px');
      setLoading(false);
    }
  }, []);
  // If I were to pass in data here, my component
  // would re-render everytime a new entry has been found

  // Side-effect for calling fetchExistingEstateData()...
  // will update only when the fetchExistingEstateData callback changes
  useEffect(() => {
    fetchExistingEstateData();
  }, [fetchExistingEstateData]);

  return (
    <div className="panel-existing-wrapper">
      <h1>All existing real estates are shown here</h1>
      { loading && <p style={{ fontSize: '50px' }}>Loading...</p> }
      <div className="estate-wrapper">
        { !data ? (
          <p>There seems to be nothing here yet...</p>
        )
          : (
            data.estates.map((estate, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={`existing-estates-${index}`} className="existing-real-estates">
                <p>
                  <span style={{ fontWeight: 500, fontSize: '20px', textDecoration: 'underline' }}>Address: </span>
                  {estate.address}
                </p>
                <p>
                  <span style={{ fontWeight: 500, fontSize: '20px', textDecoration: 'underline' }}>Size: </span>
                  {estate.size}
                </p>
              </div>
            ))
          )}
      </div>
    </div>
  );
};

export default PanelExisting;

// Note: I would like to use the built-in indexing for my keys
// as I do not want the mongo ObjectId to appear here
