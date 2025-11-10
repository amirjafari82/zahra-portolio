import React from "react";
import styled from "styled-components";
import JavidaanCompetitorAnalysis from "./JavidaanCompetitorAnalysis";
import JavidaanFeatures from "./JavidaanFeatures";
import Register from "../../../assets/icons/Register";

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
`;

const JavidaanResearch = () => {
	return (
		<div>
			<h4
				style={{
					fontSize: "24px",
					fontWeight: 500,
					marginBottom: "8px",
				}}
			>
				Interview
			</h4>
			<p
				style={{
					fontSize: "20px",
					marginBottom: "24px",
				}}
			>
				Since the timeline was tight and we needed to develop the first version
				quickly, I jumped straight into discussions
				<strong> with both the SEO and development teams.</strong> This helped
				me understand the product’s core logic, expectations, and technical
				limits — so I could propose solutions that were
				<strong> practical to build</strong> within the timeframe while
				<strong> still meeting the SEO team’s needs.</strong>
			</p>
			<p
				style={{
					fontSize: "20px",
					fontWeight: 500,
				}}
			>
				Things I learned in general from interviews with SEO experts:
			</p>
			<StyledResearchItems>
				{researchItems?.map((item) => {
					return (
						<StyledResearchItem>
							<Register />
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
