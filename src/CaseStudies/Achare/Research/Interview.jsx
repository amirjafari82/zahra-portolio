import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const items = [
	"How old are you?",
	"Are you currently employed? If yes, in what field do you work?",
	"How many times have you used Achar’s services?",
	"Before discovering Achar, how did you usually meet your service needs?",
	"Have you ever used other service request apps?",
	"If yes, what makes Achar stand out compared to those apps?",
	"What challenges or confusions did you experience during the service request process?",
	"How would you describe your overall experience using Achar?",
];

const StyledH4 = styled.h4`
	font-size: 24px;
	font-weight: 500;
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
	border-radius: 56px;
	padding: 32px;
	margin-top: 18px;
`;

const CardTitle = styled.p`
	font-weight: 500;
	font-size: 18px;
`;

const StyledItems = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	align-items: start;
	justify-content: start;
	margin-top: 10px;
`;

const StyledItem = styled.p`
	color: #414141;
`;

const Interview = () => {
	return (
		<div>
			<StyledH4>Interview</StyledH4>
			<StyledP1>
				Since the main goal of this project was to improve the user experience
				during the service request process, we started by studying user
				behavior.
				<br />
				As part of this research, we interviewed 10 Achar users to gain deeper
				insights into their main challenges and pain points.
			</StyledP1>
			<StyledCard>
				<CardTitle>
					Below, you can see the interview questions along with the most common
					user needs and pain points we identified.
				</CardTitle>
				<StyledItems>
					{items.map((i, index) => (
						<StyledItem key={index}>{i}</StyledItem>
					))}
				</StyledItems>
			</StyledCard>
		</div>
	);
};

export default Interview;
