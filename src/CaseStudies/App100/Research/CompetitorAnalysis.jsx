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

const StyledP1 = styled.p`
	font-size: 16px;
`;

const Image = styled.img`
	width: 80%;
	margin-top: 16px;
`;

const CompetitorAnalysis = () => {
	return (
		<div>
			<StyledH4>Competitor analysis</StyledH4>
			<StyledP1>
				I do competitor analysis for gaining a comprehensive undrestanding of
				the market landscape.
			</StyledP1>
			<Image src="../images/pageImages/App100/CompetitorAnalysis.png" />
		</div>
	);
};

export default CompetitorAnalysis;
