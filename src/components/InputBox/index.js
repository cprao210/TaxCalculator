import React from "react";

const InputBox = ({ type = "number", onChange, value, name, id }) => {
  console.log(name);
  return (
    <div>
      <label htmlFor={id}> {name} </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
      />
    </div>
  );
};

export default React.memo(InputBox);
