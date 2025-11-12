import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const StyledH4 = styled.h4`
	font-size: 24px;
	font-weight: 500;
	margin-bottom: 16px;
	@media ${device.tablet} {
		font-size: 20px !important;
		margin-bottom: 8px;
	}
`;

const StyledP1 = styled.p`
	font-size: 16px;
`;

const StyledCard = styled.div`
	background-color: #1e3c6e;
	width: 100%;
	text-align: center;
	padding-top: 27px;
	border-radius: 56px;
	overflow: hidden;
	margin-top: 20px;
`;

const StyledImage = styled.div`
	position: relative;
	display: inline-block;
	@media ${device.tablet} {
		width: 80%;
		margin: 0 auto;
	}
`;

const JavidaanCompetitorAnalysis = () => {
	return (
		<div style={{ marginTop: "56px" }}>
			<StyledH4>Competitor analysis</StyledH4>
			<StyledP1>
				In the next step, I reviewed the existing Iranian competitors in the
				market to get more familiar with the{" "}
				<strong>SEO landscape and its tools.</strong> This also helped me form a
				clearer picture of what an SEO analyzer tool should offer. Below, you
				can see a list of the competitors I analyzed along with their features.
			</StyledP1>

			<StyledCard>
				<StyledImage>
					<img
						src="../images/pageImages/javidaanResearch.png"
						alt="Competitor Analysis"
						style={{
							width: "100%",
							display: "block",
							maskImage:
								"linear-gradient(to bottom, black 70%, transparent 100%)",
							WebkitMaskImage:
								"linear-gradient(to bottom, black 70%, transparent 100%)",
						}}
					/>
				</StyledImage>
			</StyledCard>
		</div>
	);
};

export default JavidaanCompetitorAnalysis;
