import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const StyledH4 = styled.h4`
	font-size: 24px;
	font-weight: 500;
	margin-bottom: 16px;
	@media ${device.tablet} {
		font-size: 20px !important;
	}
`;

const Image = styled.img`
	width: 100%;
`;

const WireFrame = () => {
	return (
		<div>
			<StyledH4>Wireframe</StyledH4>
			<Image src="../images/pageImages/Nabz/Wireframe.png" />
		</div>
	);
};

export default WireFrame;
