import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 28px;
`;

const StepList = styled.ul`
	list-style: decimal;
	padding-left: 24px;
	font-size: 18px;
	line-height: 32px;
	@media ${device.tablet} {
		font-size: 16px;
	}
`;

const Gallery = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	gap: 20px;
`;

const GalleryCard = styled.div`
	border-radius: 32px;
	border: 1px solid #dfe6ed;
	padding: 20px;
	min-height: 200px;
	background: linear-gradient(180deg, #f5f6ff 0%, #ffffff 100%);
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	font-weight: 600;
	color: #1d2a73;
`;

const TrustAppDesign = () => {
	return (
		<Wrapper>
			<StepList>
				<li>Outlined trust moments throughout the pre-visit funnel.</li>
				<li>
					Tested two onboarding concepts that surfaced doctor credentials
					earlier and reduced the number of required fields.
				</li>
				<li>
					Designed a progressive document upload flow with instant confirmation
					and contextual security messaging.
				</li>
				<li>
					Created a responsive status tracker showing where each request sat in
					the review pipeline.
				</li>
			</StepList>
			<Gallery>
				<GalleryCard>Credential-first onboarding</GalleryCard>
				<GalleryCard>Document upload with progress</GalleryCard>
				<GalleryCard>Status tracker & timeline</GalleryCard>
			</Gallery>
		</Wrapper>
	);
};

export default TrustAppDesign;
