import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const StyledH4 = styled.h4`
	font-size: 24px;
	font-weight: 500;
	margin-bottom: 14px;
	@media ${device.tablet} {
		font-size: 20px !important;
	}
`;

const StyledMain = styled.div`
	margin-top: 48px;
`;

const StyledCard = styled.div`
	margin-top: 18px;
	background-color: #000;
	border-radius: 56px;
	padding: 40px 40px 0px 40px;
	overflow: hidden;
	@media ${device.tablet} {
		padding: 20px 20px 0px 20px;
	}
`;

const Image = styled.img`
	width: 100%;
	margin-bottom: -8px;
`;

const Surveys = () => {
	return (
		<StyledMain>
			<StyledH4>Interview</StyledH4>
			<StyledCard>
				<Image src="../images/pageImages/Nabz/Surveys.png" />
			</StyledCard>
		</StyledMain>
	);
};

export default Surveys;
