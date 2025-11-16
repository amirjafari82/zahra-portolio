import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const StyledMain = styled.div`
	margin-top: 30px;
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
	padding: 40px 21px;
	border: 1px solid #b9bbba;
	margin-top: 20px;
	border-radius: 56px;
	display: flex;
	justify-content: center;
	align-items: center;
	@media ${device.tablet} {
		padding: 40px 8px;
	}
`;

const Image = styled.img`
	width: 100%;
`;

const InformationArchitecture = () => {
	return (
		<StyledMain>
			<StyledH4>Information architecture</StyledH4>
			<StyledP1>
				Based on the research findings, it became clear that users had
				difficulty with the service categorization and couldn’t easily find the
				services they needed. Therefore, we redesigned the information
				architecture using the sitemap method and organized the categories in a
				way that allows users to easily find their desired services.
			</StyledP1>
			<StyledCard>
				<Image src="../../../images/pageImages/Achare/InformationArchitecture.png" />
			</StyledCard>
		</StyledMain>
	);
};

export default InformationArchitecture;
