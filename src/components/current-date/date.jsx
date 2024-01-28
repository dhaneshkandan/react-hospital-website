import React from 'react';

const CurrentDateComponent = () => {
  // Get the current date
  const currentDate = new Date();

  // Format the date as DD-MM-YYYY
  const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}-${
    (currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear()}`;

  return (
    <div>
      <h3>{formattedDate}</h3>
    </div>
  );
};

export default CurrentDateComponent;
