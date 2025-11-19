import React from "react";

const Card = ({ children }) => {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        maxWidth: "400px",
        margin: "10px auto",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
