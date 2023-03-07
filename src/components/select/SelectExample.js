import React, { useState, useEffect } from 'react';
import { Select } from './Select';

export const SelectExample = () => {
  const [data, setData] = useState([]);
  const [savedData, setSavedData] = useState();

  useEffect(() => {
    setData([
      { value: 'option0', text: 'Select an option' },
      { value: 'option1', text: 'Option 1' },
      { value: 'option2', text: 'Option 2' },
      { value: 'option3', text: 'Option 3' },
    ]);
  }, []);

  const configure = {
    onChange: (event) => {
      setSavedData(event.target.value);
    },
  };

  return (
    <div>
      <Select savedData={savedData} configure={configure}>
        {data.map((each, index) => (
          <option key={index} value={each.value}>
            {each.text}
          </option>
        ))}
      </Select>
    </div>
  );
};
