import React, { useCallback, useEffect, useState } from 'react';

import './styles.css';

const PanelExisting = () => {
  const [data, setData] = useState({ id: 1, address: 'someAddress', size: 112 });

  const fetchExistingEstateData = useCallback(async () => {
    try {
      const res = await fetch('https://localhost:4000/estate/existing');
      setData(res.data);
    } catch (err) {
      console.log(`%c There was a problem: ${err}`, 'background: #222; color: white; border: 1px dotted white; padding: 10px');
    }
  });

  useEffect(() => {
    fetchExistingEstateData();
  }, [fetchExistingEstateData]);

  return (
    <div className="panel-existing-wrapper">
      <h1>All existing real estates are shown here</h1>
      { data && (
      <div id={`existing-estates-${data.id}`} className="existing-real-estates">
        <p>{`Address: ${data.address}`}</p>
        <p>{`Size: ${data.size}`}</p>
      </div>
      )}
    </div>
  );
};

export default PanelExisting;
