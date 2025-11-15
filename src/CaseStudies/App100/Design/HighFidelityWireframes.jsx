import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const StyledH4 = styled.h4`
	font-size: 24px;
	font-weight: 500;
	margin-bottom: 16px;
	@media ${device.tablet} {
		font-size: 20px !important;
		margin-bottom: 8px;
	}
`;

const Image = styled.img`
	width: 100%;
	margin-top: 16px;
`;

const HighFidelityWireframes = () => {
	return (
		<div>
			<StyledH4>High Fidelity Wireframes</StyledH4>
			<Image src="../images/pageImages/App100/Wireframe.png" />
		</div>
	);
};

export default HighFidelityWireframes;
