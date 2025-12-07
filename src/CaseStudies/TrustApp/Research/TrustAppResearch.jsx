import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const Section = styled.div`
	border: 1px solid #dfe6ed;
	border-radius: 32px;
	padding: 32px;
	background: #ffffff;
`;

const Intro = styled.p`
	font-size: 18px;
	line-height: 32px;
	margin-bottom: 24px;
	@media ${device.tablet} {
		font-size: 16px;
	}
`;

const InsightsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	gap: 16px;
`;

const Insight = styled.div`
	padding: 20px;
	border-radius: 24px;
	background: #f6fbf5;
	border: 1px solid #d2ead0;
`;

const InsightTitle = styled.h5`
	font-size: 16px;
	font-weight: 600;
	margin-bottom: 8px;
	color: #0c8437;
`;

const InsightText = styled.p`
	font-size: 15px;
	line-height: 26px;
	margin: 0;
`;

const MockupRow = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	gap: 16px;
	margin-top: 28px;
`;

const Placeholder = styled.div`
	height: 220px;
	border-radius: 24px;
	background: linear-gradient(135deg, #e3f6d4, #b0e59c);
	display: flex;
	align-items: center;
	justify-content: center;
	color: #0c4b1e;
	font-weight: 600;
`;

const TrustAppResearch = () => {
	return (
		<Section>
			<Intro>
				I interviewed 12 returning users and analyzed support transcripts from
				the previous 6 months. The key question we needed to answer was how to
				create the same level of trust patients feel during in-person visits.
			</Intro>
			<InsightsGrid>
				<Insight>
					<InsightTitle>Trust gaps</InsightTitle>
					<InsightText>
						67% of participants questioned the authenticity of specialists
						because bios were generic and surfaced late in the journey.
					</InsightText>
				</Insight>
				<Insight>
					<InsightTitle>Fragmented updates</InsightTitle>
					<InsightText>
						Patients relied on email and phone calls; status inside the app was
						rarely accurate, triggering unnecessary support tickets.
					</InsightText>
				</Insight>
				<Insight>
					<InsightTitle>Document anxiety</InsightTitle>
					<InsightText>
						People worried that sensitive medical files were lost; there was no
						confirmation after upload, and revisions meant starting over.
					</InsightText>
				</Insight>
			</InsightsGrid>
			<MockupRow>
				<Placeholder>Research Notes</Placeholder>
				<Placeholder>Journey Map</Placeholder>
				<Placeholder>Opportunity Map</Placeholder>
			</MockupRow>
		</Section>
	);
};

export default TrustAppResearch;
