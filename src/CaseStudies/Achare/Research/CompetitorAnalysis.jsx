import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const StyledH4 = styled.h4`
	font-size: 24px;
	font-weight: 500;
	margin-top: 24px;
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
	padding: 0px 30px 42px 30px;
	margin-top: 30px;
	border-radius: 56px;
	overflow: hidden;
`;

const Image = styled.img`
	width: 100%;
`;

const CompetitorAnalysis = () => {
	return (
		<div>
			<StyledH4>Competitor Analysis</StyledH4>
			<StyledP1>
				After analyzing the results from our user research, we conducted a
				competitive analysis of both local and international platforms to gather
				insights and inspiration for addressing the identified challenges.
			</StyledP1>
			<StyledCard>
				<div
					style={{
						width: "100%",
						maskImage: "linear-gradient(to top, black 90%, transparent 100%)",
						WebkitMaskImage:
							"linear-gradient(to top, black 90%, transparent 100%)",
					}}
				>
					<Image src="../../../images/pageImages/Achare/CompetitorAnalysis.png" />
				</div>
			</StyledCard>
		</div>
	);
};

export default CompetitorAnalysis;
