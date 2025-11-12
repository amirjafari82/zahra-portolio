import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const StyledH4 = styled.h4`
	font-weight: 600;
	font-size: 24px;
	margin-bottom: 8px;
	@media ${device.tablet} {
		font-size: 20px !important;
	}
`;

const LowFidelityWireframes = () => {
	return (
		<div>
			<StyledH4>Low Fidelity Wireframes</StyledH4>
			<p>
				To save time, I sketched out a series of hand-drawn concepts based on
				the insights we had gathered and the features that were finalized. I
				designed the key pages and shared them with the technical team. After a
				few rounds of back-and-forth discussion, we finalized near-complete
				versions for the UI, and I immediately jumped into the UI design.
			</p>
			<div
				style={{
					marginTop: "16px",
					width: "100%",
					height: "700px",
					backgroundColor: "#E6E6E6",
				}}
			></div>
		</div>
	);
};

export default LowFidelityWireframes;
