import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const items = [
	{
		title: "Challenges",
		options: [
			"Lack of trust and reliability",
			"Not receiving proper service after submitting a request",
			"Confusion when choosing the right service provider",
			"Ambiguity and uncertainty during the request process",
			"Limited access to local or small-scale service providers",
			"Hidden pricing and lack of transparency",
			"Weak customer support and feedback system",
			"Time-consuming process",
		],
	},
	{
		title: "User Needs",
		options: [
			"Transparent service details (including provider and service descriptions)",
			"Accurate and fair pricing",
			"Saving user information for future use",
			"A clear and simple request submission process",
			"Fast and convenient service selection",
			"Guidance during each step of the request process",
			"Access to support whenever needed",
			"Receiving real-time updates on request status and service progress",
		],
	},
	{
		title: "Ideas",
		model: "left-right",
		options: {
			left: [
				"Use personalized messages (e.g., including the user’s name in SMS notifications)",
				"Provide clear and categorized descriptions for all services",
				"Offer customer support and feedback channels after each request",
				"Display service provider ratings and reviews",
			],
			right: [
				"Allow users to rate and evaluate completed services",
				"Offer a pricing estimate before final confirmation",
				"Encourage users to leave feedback for service providers",
				"Build user trust by highlighting verified or top-rated professionals",
				"Guarantee service repetition or free return in case of dissatisfaction",
			],
		},
	},
];

const StyledMain = styled.div`
	margin-top: 36px;
`;

const StyledH4 = styled.h4`
	font-size: 24px;
	font-weight: 500;
	margin-bottom: 10px;
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

const StyledImages = styled.div`
	display: flex;
	gap: 24px;
	justify-content: center;
	margin-bottom: 36px;
`;

const StyledImage = styled.img`
	width: 50%;
`;

const StyledCards = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	gap: 30px;
	@media ${device.laptop} {
		flex-direction: column;
	}
`;

const StyledCard = styled.div`
	background-color: #f8f6f6;
	border-radius: 56px;
	padding: 44px 36px;
	flex-basis: ${(props) =>
		props.model == "left-right" ? "100%" : "calc(50% - 87px)"};
`;

const Title = styled.span`
	font-size: 24px;
	font-weight: 500;
`;

const StyledUL = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-top: 20px;
	margin-left: 6px;
	@media ${device.laptop} {
		margin-top: 8px;
	}
`;

const StyledLI = styled.li`
	font-size: 18px;
	@media ${device.tablet} {
		font-size: 14px;
	}
`;

const StyledLeftRight = styled.div`
	display: flex;
	justify-content: space-around;
	@media ${device.laptop} {
		flex-direction: column;
	}
`;

const Brainstorming = () => {
	return (
		<StyledMain>
			<StyledH4>Brainstorming</StyledH4>
			<StyledP1>
				We gathered the key user needs and challenges discovered during the
				empathy phase and started exploring ways to address them.
				<br />
				To generate ideas, our team held a brainstorming session where the three
				of us discussed insights from the research and organized them using an
				empathy map.
			</StyledP1>
			<StyledImages>
				<StyledImage src="../../../images/pageImages/Achare/Brainstorming1.png" />
				<StyledImage src="../../../images/pageImages/Achare/Brainstorming2.png" />
			</StyledImages>
			<StyledCards>
				{items.map((item, index) => {
					return (
						<StyledCard key={index} model={item?.model}>
							<Title>{item.title}</Title>
							{item?.model == "left-right" ? (
								<StyledLeftRight>
									<StyledUL>
										{item.options.left?.map((d, index) => (
											<StyledLI key={index}>{d}</StyledLI>
										))}
									</StyledUL>
									<StyledUL>
										{item.options.right?.map((d, index) => (
											<StyledLI key={index}>{d}</StyledLI>
										))}
									</StyledUL>
								</StyledLeftRight>
							) : (
								<StyledUL>
									{item.options?.map((d, index) => (
										<StyledLI key={index}>{d}</StyledLI>
									))}
								</StyledUL>
							)}
						</StyledCard>
					);
				})}
			</StyledCards>
		</StyledMain>
	);
};

export default Brainstorming;
