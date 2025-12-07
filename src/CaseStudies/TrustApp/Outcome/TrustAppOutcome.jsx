import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
	gap: 24px;
`;

const Card = styled.div`
	border-radius: 32px;
	border: 1px solid #dfe6ed;
	padding: 24px;
	background: #f9fffa;
`;

const Title = styled.h5`
	margin-bottom: 12px;
	font-size: 20px;
	color: #0c8437;
	@media ${device.tablet} {
		font-size: 18px;
	}
`;

const Text = styled.p`
	font-size: 16px;
	line-height: 28px;
	margin: 0;
`;

const TrustAppOutcome = () => {
	return (
		<Wrapper>
			<Card>
				<Title>Outcome</Title>
				<Text>
					After launch, onboarding completion improved by 24% and support
					tickets related to document uploads dropped by 36%. The new trust
					indicators were highlighted in stakeholder demos and will roll out to
					the mobile app next quarter.
				</Text>
			</Card>
			<Card>
				<Title>What I Learned</Title>
				<Text>
					Pairing qualitative research with guardrail metrics early on helped me
					make faster trade-offs. Presenting intermediate states to engineering
					also reduced implementation uncertainty.
				</Text>
			</Card>
		</Wrapper>
	);
};

export default TrustAppOutcome;
