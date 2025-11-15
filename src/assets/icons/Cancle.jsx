import * as React from "react";
const Cancle = (props) => (
	<svg
		width={16}
		height={16}
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<circle cx={8} cy={8} r={8} fill="#E00004" />
		<path
			d="M5.82031 5.91016L10.1784 10.0549"
			stroke="#FAFAFA"
			strokeWidth={0.475516}
			strokeLinecap="round"
		/>
		<path
			d="M5.82031 10.0547L10.1784 5.90993"
			stroke="#FAFAFA"
			strokeWidth={0.475516}
			strokeLinecap="round"
		/>
	</svg>
);
export default Cancle;
