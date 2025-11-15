import * as React from "react";
const Message = (props) => (
	<svg
		width={32}
		height={32}
		viewBox="0 0 32 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M23.8695 11.8013L17.9451 16.6187C16.8258 17.5067 15.2509 17.5067 14.1316 16.6187L8.15723 11.8013"
			stroke="black"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M22.5455 27.9999C26.6006 28.0112 29.3337 24.6794 29.3337 20.5845V11.4267C29.3337 7.33177 26.6006 4 22.5455 4H9.45517C5.40004 4 2.66699 7.33177 2.66699 11.4267V20.5845C2.66699 24.6794 5.40004 28.0112 9.45517 27.9999H22.5455Z"
			stroke="black"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default Message;
