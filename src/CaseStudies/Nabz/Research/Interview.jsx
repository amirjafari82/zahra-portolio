import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";
import InterviewItems from "./InterviewItems";

const StyledH4 = styled.h4`
	font-size: 24px;
	font-weight: 500;
	margin-bottom: 14px;
	@media ${device.tablet} {
		font-size: 20px !important;
	}
`;

const StyledP1 = styled.p`
	font-size: 18px;
	margin-bottom: 36px;
	@media ${device.tablet} {
		font-size: 16px !important;
	}
`;

const Interview = () => {
	return (
		<>
			<StyledH4>Interview</StyledH4>
			<StyledP1>
				Since the goal of the project was to improve the user experience in the
				process of registering a doctor's appointment, we started the first step
				by studying the behavior of users. In this way, we interviewed 17
				persons in order to have a deep understanding of their main challenges.
			</StyledP1>
			<InterviewItems />
		</>
	);
};

export default Interview;
