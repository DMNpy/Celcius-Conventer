import React from 'react';

const DereceDonusturButton = ({ onClick, id, text }) => {
  return (
    <button
      onClick={onClick}
      id={id}
      type="button"
        >
      {text}
    </button>
  );
}

export default DereceDonusturButton;
