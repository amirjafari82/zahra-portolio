import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const StyledH4 = styled.h4`
	font-size: 24px;
	font-weight: 500;
	margin-bottom: 16px;
	margin-top: 48px;
	@media ${device.tablet} {
		font-size: 20px !important;
	}
`;

const Image = styled.img`
	width: 100%;
    margin-bottom: 16px;
`;

const ResearchOthers = () => {
	return (
		<div>
			<StyledH4>And Others...</StyledH4>
			<Image src="../images/pageImages/Nabz/UserPersona.png" />
			<Image src="../images/pageImages/Nabz/CompetitorAnalysis.png" />
		</div>
	);
};

export default ResearchOthers;
