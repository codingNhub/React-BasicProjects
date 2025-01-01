import { useState } from "react";

const ControlledInput = () => {
  const [value, setValue] = useState("");

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter here..."
        onChange={handleInput}
        value={value}
      />
      <p>Your input: {value}</p>
    </>
  );
};

export default ControlledInput;
