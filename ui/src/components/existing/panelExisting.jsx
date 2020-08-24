import React, { useCallback, useEffect, useState } from 'react';
import './styles.css';

const PanelExisting = () => {
  const [data, setData] = useState();

  const fetchExistingEstateData = useCallback(async () => {
    try {
      const res = await fetch('/estate/all', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('---------------------->', res.json);
      setData(res.data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(`%c There was a problem: ${err}`, 'background: #222; color: white; border: 1px dotted white; padding: 10px');
    }
  });

  useEffect(() => {
    fetchExistingEstateData();
  }, [fetchExistingEstateData]);

  return (
    <div className="panel-existing-wrapper">
      <h1>All existing real estates are shown here</h1>
      { !data ? (
        <p>There seems to be nothing here yet...</p>
      )
        : (
          <div id={`existing-estates-${data.id}`} className="existing-real-estates">
            <p>{data}</p>

          </div>
        )}
    </div>
  );
};

export default PanelExisting;
