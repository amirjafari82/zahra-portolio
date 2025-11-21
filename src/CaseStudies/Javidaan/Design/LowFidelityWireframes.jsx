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

const StyledCard = styled.div`
	border: 1px solid #dadada;
	border-radius: 56px;
	padding: 44px;
	text-align: center;
	margin-top: 16px;
	@media ${device.mobile} {
		padding: 16px;
	}
`;

const StyledImage = styled.img`
	border-radius: 16px;
	width: 70%;
	@media ${device.mobile} {
		width: 100%;
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
			<StyledCard>
				<StyledImage src="../../../images/pageImages/JavidaanWireframes.png" />
			</StyledCard>
		</div>
	);
};

export default LowFidelityWireframes;
