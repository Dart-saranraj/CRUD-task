import React, { useState } from 'react';

const Info = ({ empDetails }) => {
  console.log(empDetails, "empdetails");

  const [show, setShow] = useState({});

  const toggleShow = (key) => {
    setShow({ ...show, [key]: !show[key] });
  };

  return (
    <main>
      <h2>Employee Names</h2>
      <ol>
        {empDetails.map((emp, index) => (
          <li key={emp.id || index} onClick={() => toggleShow(index)}>
            {emp.name}
            {show[index] && (
              <ul>
                <li key={emp.id || index}>{emp.mobileNo}</li>
                <li key={emp.id || index}>{emp.designation}</li>
                <li key={emp.id || index}>{emp.emailId}</li>
                <li key={emp.id || index}>{emp.location}</li>
              </ul>
            )}
          </li>
        ))}
      </ol>
    </main>
  );
};

export default Info;
