import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const items = [
	"What is your usual preference for getting service-related tasks done?",
	"What is the main reason you choose to use service apps?",
	"How do you usually find the right service within service apps?	",
	"What is the most important factor for you when choosing a service provider?",
	"How much do you trust user ratings and reviews in the app when selecting a provider?",
	"Under what circumstances would you try a new service app?",
	"Which part of the service booking process in the app do you find most complicated?",
];

const StyledMain = styled.div`
	margin-top: 60px;
`;

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
	padding: 42px 30px;
	margin-top: 30px;
	border-radius: 56px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media ${device.tablet} {
		flex-direction: column-reverse;
		gap: 16px;
	}
`;

const StyledItems = styled.div`
	> div {
		display: flex;
		flex-direction: column;
		gap: 12px;
		align-items: start;
	}
`;

const StyledItem = styled.div`
	display: flex;
	gap: 4px;
	align-items: center;
`;

const Number = styled.span`
	@media ${device.tablet} {
		font-size: 14px;
	}

	@media ${device.mobile} {
		font-size: 12px;
	}
`;
const Text = styled.p`
	@media ${device.tablet} {
		font-size: 14px;
	}

	@media ${device.mobile} {
		font-size: 12px;
	}
`;

const Image = styled.img`
	width: 50%;
	@media ${device.tablet} {
		width: 100%;
	}
`;

const Survey = () => {
	return (
		<StyledMain>
			<StyledH4>Survey</StyledH4>
			<StyledP1>
				To better analyze user challenges, we designed a questionnaire. To
				gather a wider range of insights, we shared it with people who had
				experience using service apps, including Achareh.
				<br />
				You can see some of the survey questions and the users’ charted
				responses, which gave us a clearer understanding of the existing
				challenges.
			</StyledP1>
			<StyledCard>
				<StyledItems>
					<div
						style={{
							width: "100%",
							maskImage:
								"linear-gradient(to bottom, black 70%, transparent 100%)",
							WebkitMaskImage:
								"linear-gradient(to bottom, black 70%, transparent 100%)",
						}}
					>
						{items.map((item, index) => {
							return (
								<StyledItem key={index}>
									<Number>{index + 1}- </Number>
									<Text>{item}</Text>
								</StyledItem>
							);
						})}
					</div>
				</StyledItems>
				<Image src="../../../images/pageImages/Achare/Survey.png" />
			</StyledCard>
		</StyledMain>
	);
};

export default Survey;
