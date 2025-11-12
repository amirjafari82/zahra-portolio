import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const StyledCard = styled.div`
	border: 1px solid #dadada;
	border-radius: 56px;
	width: 100%;
	overflow: hidden;
`;

const StyledImage = styled.img`
	width: 100%;
`;

const StyledH4 = styled.h4`
	font-weight: 600;
	font-size: 24px;
	margin-bottom: 8px;
	margin-top: 60px;
	@media ${device.tablet} {
		font-size: 20px !important;
	}
`;

const OtherPages = () => {
	return (
		<div>
			<StyledH4>And many other pages...</StyledH4>
			<StyledCard>
				<StyledImage src="../../../images/pageImages/JavidaanOther.png" />
			</StyledCard>
		</div>
	);
};

export default OtherPages;
