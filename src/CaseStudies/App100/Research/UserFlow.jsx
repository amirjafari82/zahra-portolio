import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const StyledUserFlow = styled.div`
	margin-top: 56px;
`;

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

const ImageSec = styled.div`
	background-color: #000;
	border-radius: 56px;
	margin-top: 16px;
	text-align: right;
	position: relative;
`;

const Image = styled.img`
	width: 80%;
	margin-left: auto;
`;

// const Logo = styled.img`
// 	width: 150px;
// 	margin-left: auto;
// 	position: absolute;
// 	left: 240px;
// 	bottom: 688px;
// `;

const UserFlow = () => {
	return (
		<StyledUserFlow>
			<StyledH4>User Flow</StyledH4>
			<StyledP1>
				I considered the user flow to make sure that the user goes through a
				efficient flow .
			</StyledP1>
			<ImageSec>
				<Image src="../images/pageImages/App100/Sitemap.png" />
				{/* <Logo src="../images/pageImages/App100/Logo.png" /> */}
			</ImageSec>
		</StyledUserFlow>
	);
};

export default UserFlow;
