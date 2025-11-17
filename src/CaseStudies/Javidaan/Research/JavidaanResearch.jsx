import React from "react";
import styled from "styled-components";
import JavidaanCompetitorAnalysis from "./JavidaanCompetitorAnalysis";
import JavidaanFeatures from "./JavidaanFeatures";
import Register from "../../../assets/icons/Register";
import { device } from "../../../styles/breakpoints";

const researchItems = [
	{
		text: "They wanted to see a summary view of keyword performance and changes in traffic.",
	},
	{
		text: "Workers often had to switch between multiple tools.",
	},
	{
		text: "Custom filters and reports were important in managing various clients, projects and tasks.",
	},
	{
		text: "Data visualization needs to be simple and yet rich enough to drive planned action.",
	},
	{
		text: "They wanted a dashboard that could be easily explained to a client, especially a business-owner/manager, without technical jargon.",
	},
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
	font-size: 20px;
	margin-bottom: 24px;
	@media ${device.tablet} {
		font-size: 16px !important;
	}
`;

const StyledP2 = styled.p`
	font-size: 20px;
	font-weight: 500;
	margin-bottom: 6px;
	@media ${device.tablet} {
		font-size: 16px !important;
	}
`;

const StyledResearchItems = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-top: 16px;
`;

const StyledResearchItem = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
	@media ${device.tablet} {
		> p {
			font-size: 16px !important;
		}
	}
`;

const JavidaanResearch = () => {
	return (
		<div>
			<StyledH4>Interview</StyledH4>
			<StyledP1>
				Since the timeline was tight and we needed to develop the first version
				quickly, I jumped straight into discussions
				<strong> with both the SEO and development teams.</strong> This helped
				me understand the product’s core logic, expectations, and technical
				limits — so I could propose solutions that were
				<strong> practical to build</strong> within the timeframe while
				<strong> still meeting the SEO team’s needs.</strong>
			</StyledP1>
			<StyledP2>
				Things I learned in general from interviews with SEO experts:
			</StyledP2>
			<StyledResearchItems>
				{researchItems?.map((item) => {
					return (
						<StyledResearchItem>
							<Register
								style={{
									flexShrink: 0,
								}}
							/>
							<p
								style={{
									fontSize: "18px",
									fontWeight: item?.style == "bold" ? 600 : 400,
								}}
							>
								{item?.text}
							</p>
						</StyledResearchItem>
					);
				})}
			</StyledResearchItems>
			<JavidaanCompetitorAnalysis />
			<JavidaanFeatures />
		</div>
	);
};

export default JavidaanResearch;
