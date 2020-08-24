import React, { useCallback, useEffect, useState } from 'react';
import './styles.css';

const PanelExisting = () => {
  const [data, setData] = useState();

  const fetchExistingEstateData = useCallback(async () => {
    try {
      const res = await fetch('http://localhost:4000/api/estate/all', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const estateData = await res.json(res);

      setData(estateData);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(`%c There was a problem: ${err}`, 'background: #222; color: white; border: 1px dotted white; padding: 10px');
    }
  });

  // Side-effect for data fetching, will only run once as an empty array of dependencies is defined
  useEffect(() => {
    fetchExistingEstateData();
  }, []);

  return (
    <div className="panel-existing-wrapper">
      <h1>All existing real estates are shown here</h1>
      { !data ? (
        <p>There seems to be nothing here yet...</p>
      )
        : (
          data.estates.map((estate) => (
            <div key={`existing-estates-${estate.id}`} className="existing-real-estates">
              <p>{estate.address}</p>
              <p>{estate.size}</p>
            </div>
          ))
        )}
    </div>
  );
};

export default PanelExisting;
