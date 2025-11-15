import * as React from "react";
const Confirm = (props) => (
	<svg
		width={16}
		height={16}
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<circle cx={8} cy={8} r={8} fill="#11AF68" />
		<path
			d="M5.30273 8.04341L7.00553 10.0868L10.6665 5.88086"
			stroke="#FAFAFA"
			strokeWidth={0.48484}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default Confirm;
