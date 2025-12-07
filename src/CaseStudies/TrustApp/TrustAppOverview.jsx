import React from "react";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 3fr 2fr;
	gap: 32px;
	align-items: start;
	border: 1px solid #dfe6ed;
	border-radius: 32px;
	padding: 32px;
	background: #fdfefe;
	margin-bottom: 40px;
	@media ${device.laptop} {
		grid-template-columns: 1fr;
	}
`;

const Section = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const Title = styled.h4`
	font-size: 24px;
	font-weight: 600;
	color: #0051ba;
	margin: 0;
	@media ${device.tablet} {
		font-size: 20px;
	}
`;

const Paragraph = styled.p`
	font-size: 18px;
	line-height: 32px;
	color: #1d1d1d;
	margin: 0;
	@media ${device.tablet} {
		font-size: 16px;
	}
`;

const TrustAppOverview = () => {
	return (
		<Wrapper>
			<Section>
				<Title>Introduction</Title>
				<Paragraph>
					For this project, I re-imagined a medical trust-and-care mobile
					experience and translated it to web. The goal was to redesign the
					onboarding and claims experience so that patients could build trust
					before their first appointment, manage documentation in one place, and
					feel confident about speaking with a specialist remotely.
				</Paragraph>
				<Paragraph>
					My role: lead product designer, responsible for research synthesis,
					journey mapping, and the final high-fidelity handoff delivered to
					engineers.
				</Paragraph>
			</Section>
			<Section>
				<Title>Objectives</Title>
				<Paragraph>
					1. Increase trust signals prior to booking an appointment. <br />
					2. Remove friction from the document submission flow. <br />
					3. Provide contextual education so patients can make confident,
					informed decisions.
				</Paragraph>
			</Section>
		</Wrapper>
	);
};

export default TrustAppOverview;
