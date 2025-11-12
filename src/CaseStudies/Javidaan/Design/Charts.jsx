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
	@media ${device.mobile} {
		padding: 16px;
	}
`;

const TopSide = styled.div`
	display: flex;
	justify-content: center;
	align-items: start;
	gap: 20px;
	margin-bottom: 20px;
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

const Charts = () => {
	return (
		<div>
			<StyledH4>Charts & ranking tables</StyledH4>
			<StyledCard>
				<TopSide>
					<StyledImage src="../../../images/pageImages/JavidaanRankTables.png" />
					<StyledImage src="../../../images/pageImages/JavidaanRankTables2.png" />
				</TopSide>
				<BottomSide>
					<StyledImage src="../../../images/pageImages/JavidaanKeyWord.png" />
					<StyledImage src="../../../images/pageImages/JavidaanRankHistory.png" />
					<StyledImage src="../../../images/pageImages/JavidaanFilter.png" />
				</BottomSide>
			</StyledCard>
		</div>
	);
};

export default Charts;
