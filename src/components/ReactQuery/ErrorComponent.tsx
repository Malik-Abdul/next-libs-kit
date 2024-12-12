import React from "react";

interface ErrorProps {
  message: string;
}

const ErrorComponent: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div style={{ color: "red", textAlign: "center", margin: "20px" }}>
      <h2>Something went wrong</h2>
      <div>{message}</div>
    </div>
  );
};

export default ErrorComponent;
