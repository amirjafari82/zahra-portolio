import React from "react";
import styled from "styled-components";

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
`;

const BottomSide = styled.div`
	display: flex;
	justify-content: center;
	align-items: start;
	gap: 25px;
	margin-bottom: 60px;
`;

const StyledImage = styled.img``;

const Charts = () => {
	return (
		<div>
			<h4
				style={{
					fontWeight: 600,
					fontSize: "24px",
					marginBottom: "16px",
					marginTop: "120px",
				}}
			>
				Charts & ranking tables
			</h4>
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
