import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const StyledH4 = styled.h4`
	font-weight: 600;
	font-size: 24px;
	margin-bottom: 8px;
	margin-top: 60px;
	@media ${device.tablet} {
		font-size: 20px !important;
	}
`;

const StyledCard = styled.div`
	border: 1px solid #dadada;
	border-radius: 56px;
	padding: 44px;
`;

const TopSide = styled.div`
	display: flex;
	justify-content: center;
	align-items: start;
	gap: 20px;
	margin-bottom: 60px;
	@media ${device.desktopLg} {
		flex-wrap: wrap;
	}
`;

const BottomSide = styled.div`
	display: flex;
	justify-content: center;
	align-items: start;
	gap: 25px;
	margin-bottom: 60px;
	@media ${device.desktopLg} {
		flex-wrap: wrap;
	}
`;

const StyledImage = styled.img`
	border-radius: 16px;
	@media ${device.mobile} {
		width: 100%;
	}
`;

const LinksAnkers = () => {
	return (
		<div>
			<StyledH4>Link & Ankers</StyledH4>
			<StyledCard>
				<TopSide>
					<StyledImage src="../../../images/pageImages/JavidaanLinkAnalyzer.png" />
					<StyledImage src="../../../images/pageImages/JavidaanInsideLink.png" />
					<StyledImage src="../../../images/pageImages/JavidaanForeignLink.png" />
				</TopSide>
				<BottomSide>
					<StyledImage src="../../../images/pageImages/JavidaanRefrence.png" />
					<StyledImage src="../../../images/pageImages/JavidaanLinkReport.png" />
					<StyledImage src="../../../images/pageImages/JavidaanSiteAnker.png" />
				</BottomSide>
			</StyledCard>
		</div>
	);
};

export default LinksAnkers;
