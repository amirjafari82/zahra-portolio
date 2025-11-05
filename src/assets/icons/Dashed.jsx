import * as React from "react";
const Dashed = (props) => (
  <svg
    width={200}
    height={1}
    viewBox="0 0 336 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0.5H336" stroke="#C2C2C2" strokeDasharray="13 13" />
  </svg>
);
export default Dashed;
