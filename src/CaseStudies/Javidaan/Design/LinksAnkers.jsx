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

const LinksAnkers = () => {
	return (
		<div>
			<h4
				style={{
					fontWeight: 600,
					fontSize: "24px",
					marginBottom: "16px",
					marginTop: "56px",
				}}
			>
				Link & Ankers
			</h4>
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
