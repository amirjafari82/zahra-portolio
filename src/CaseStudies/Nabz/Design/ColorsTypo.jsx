import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const StyledMain = styled.div`
	margin-top: 56px;
`;

const StyledH4 = styled.h4`
	font-size: 24px;
	font-weight: 500;
	margin-bottom: 16px;
	@media ${device.tablet} {
		font-size: 20px !important;
	}
`;

const StyledP1 = styled.p`
	font-size: 16px;
	margin-bottom: 36px;
	@media ${device.tablet} {
		font-size: 14px !important;
	}
`;

const Image = styled.img`
	width: 752px;
	@media ${device.laptop} {
		width: 100%;
	}
`;

const Image2 = styled.img`
	width: 100%;
`;

const ColorsTypo = () => {
	return (
		<StyledMain>
			<StyledH4>Colors & Typography</StyledH4>
			<StyledP1>
				We have created a UI kit to bring more coherence and consistency to our
				work, which includes cards, text fields, colors, and fonts. You can see
				part of it
			</StyledP1>
			<div
				style={{
					marginBottom: "54px",
				}}
			>
				<Image src="../images/pageImages/Nabz/ColorsTypo.png" />
			</div>
			<div>
				<Image2 src="../images/pageImages/Nabz/ColorsTypo2.png" />
			</div>
		</StyledMain>
	);
};

export default ColorsTypo;
