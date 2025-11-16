import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const StyledH4 = styled.h4`
	font-size: 24px;
	font-weight: 500;
	margin-top: 24px;
	margin-bottom: 8px;
	@media ${device.tablet} {
		font-size: 20px !important;
	}
`;

const StyledP1 = styled.p`
	font-size: 16px;
	margin-bottom: 24px;
	@media ${device.tablet} {
		font-size: 14px !important;
	}
`;

const StyledCard = styled.div`
	background-color: #f8f6f6;
	text-align: center;
	padding: 40px 16px 12px 16px;
	margin-top: 30px;
	border-radius: 56px;
	overflow: hidden;
`;

const Image = styled.img`
	width: 80%;
    @media ${device.tablet} {
		width: 100%;
	}
`;

const UserScenario = () => {
	return (
		<div>
			<StyledH4>User Scenario</StyledH4>
			<StyledP1>
				We analyzed and discussed the collected data collaboratively, and based
				on that, we designed the User scenario.
			</StyledP1>
			<StyledCard>
				<Image src="../../../images/pageImages/Achare/UserScenario.png" />
			</StyledCard>
		</div>
	);
};

export default UserScenario;
