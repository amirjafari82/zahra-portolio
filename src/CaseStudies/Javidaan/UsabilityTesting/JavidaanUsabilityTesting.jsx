import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const StyledP1 = styled.p`
	font-size: 20px;
	margin-bottom: 24px;
	@media ${device.tablet} {
		font-size: 14px !important;
	}
`;

const StyledCard = styled.div`
	border: 1px solid #dadada;
	background-color: #fafafa;
	padding: 32px 24px;
	margin-top: 48px;
	border-radius: 56px;
    text-align: center;
    @media ${device.tablet} {
		font-size: 14px !important;
	}
`;

const Image = styled.img`
	width: 100%;
`;

const JavidaanUsabilityTesting = () => {
	return (
		<div>
			<StyledP1>
				We made the decision to release Javidan's initial version first because
				of the short timeline. Following launch, areas for improvement were
				determined using user feedback and actual usage data. I have been in
				charge of the ongoing iteration and improvement process.
			</StyledP1>
		</div>
	);
};

export default JavidaanUsabilityTesting;
