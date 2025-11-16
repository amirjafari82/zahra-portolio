import * as React from "react";
const Tick = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={12} r={12} fill="#11AF68" />
    <path
      d="M7.9541 12.0651L10.5083 15.1302L15.9998 8.82129"
      stroke="#FAFAFA"
      strokeWidth={0.72726}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Tick;
