import React from "react";

const Ellipse = (props) => {
	return (
		<svg
			width={6}
			height={6}
			viewBox="0 0 6 6"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<circle cx={3} cy={3} r={3} fill="#4A93F2" />
		</svg>
	);
};

export default Ellipse;
