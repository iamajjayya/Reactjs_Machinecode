import React, { useState } from "react";

const Accordian = ({ title, content }) => {
  const [isOpen, setIsopen] = useState(false);

  const toggleAccordian = () => {
    setIsopen(!isOpen);
  };

  return (
    <div>
      <div
        onClick={toggleAccordian}
        style={{
          padding: "10px",
          marginBottom: "5px",
          cursor: "pointer",
          border: "1px solid black",
        }}
      >
        {title}
      </div>
      {isOpen && (
        <div
          style={{
            padding: "10px",
            marginBottom: "5px",
            cursor: "pointer",
            border: "1px solid black",
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

Accordian;

const Result = () => {
  return (
    <div>
      <Accordian title="Accordian 1" content="This is the Accordian 1" />
      <Accordian title="Accordian 2" content="This is the Accordian 2" />
      <Accordian title="Accordian 3" content="This is the Accordian 3" />
    </div>
  );
};

export default Result;
