import React from "react";
import styled from "styled-components";
import Dashed from "../assets/icons/Dashed";
import { device } from "../styles/breakpoints";

const StyledMyExperience = styled.div`
	background-color: #fff;
	border-radius: 56px;
	border: 6px solid #e6e4ff;
	padding: 40px;
	width: calc(100% - 92px);
`;

const StyledHeader = styled.h4`
	font-size: 32px;
	font-weight: 300;
	margin-bottom: 48px;
	@media ${device.desktopLgMore} {
		font-size: 20px;
	}
`;

const StyledHeaderBold = styled.span`
	font-size: 24px;
	font-weight: 600;
	@media ${device.desktopLgMore} {
		font-size: 20px;
	}
`;

const StyledDesc = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`;

const Line = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	justify-content: start;
`;

const StyledInfo = styled.span`
	color: ${(props) => props.color};
	font-weight: 400;
	font-size: 18px;
	flex-wrap: nowrap;
	display: flex;
	align-items: center;
	gap: 21px;
	flex-shrink: 0;
	@media (max-width: 821px) {
		font-size: 16px;
	}
	@media ${device.tablet} {
		font-size: 14px;
	}
`;

const StyledInfoDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
	@media (max-width: 620px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const Dot = styled.div`
	width: 8px;
	height: 8px !important;
	background-color: ${(props) => props.color || "#000"};
	border-radius: 100%;
	flex-shrink: 0;
`;

const Line2 = styled.div`
	width: 2px;
	height: 85%;
	background-color: #000;
	position: absolute;
	top: 16px;
	left: 3px;
	@media (max-width: 821px) {
		height: 84%;
		top: 24px;
	}
	@media (max-width: 620px) {
		height: 76%;
		top: 48px;
	}
	@media (max-width: 464px) {
		height: 78%;
		top: 48px;
	}
	@media (max-width: 447px) {
		height: 78%;
		top: 52px;
	}
	@media (max-width: 436px) {
		height: 76%;
		top: 64px;
	}
	@media (max-width: 384px) {
		height: 76%;
		top: 72px;
	}
	/* @media (max-width: 1776px) {
		height: 82%;
		top: 16px;
		left: 3px;
	} */
	/* @media (max-width: 1655px) {
		height: 82%;
		top: 28px;
		left: 3px;
	}
	@media (max-width: 1651px) {
		height: 77%;
		top: 28px;
		left: 3px;
	}
	@media (max-width: 1546px) {
		top: 32px;
	}

	@media (max-width: 1024px) {
		height: 78%;
		top: 18px;
	}
	
	@media (max-width: 768px) {
		height: 84%;
		top: 14px;
	}
	@media (max-width: 589px) {
		height: 84%;
		top: 20px;
	}
	@media (max-width: 450px) {
		height: 84%;
		top: 22px;
	}
	@media (max-width: 414px) {
		height: 86%;
		top: 24px;
	}
	@media (max-width: 335px) {
		height: 90%;
		top: 24px;
	} */
`;

const items = [
	"Design and work on the company's main product",
	"design and redesign UI/UX projects",
	"Communication with technical team and marketing team to improve projects",
];

const StyledItems = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	margin-bottom: 56px;
	margin-top: 8px;
	gap: 4px;
`;

const StyledItem = styled.div`
	display: flex;
	align-items: center;
	margin-left: 32px;
	gap: 6px;
	color: #727272;
	@media (max-width: 821px) {
		font-size: 14px;
	}
	@media ${device.tablet} {
		font-size: 12px;
	}
`;

const Logo = styled.div`
	background-color: #001287;
	width: 40px;
	height: 40px;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
`;

const AminaLogo = styled.img`
	width: 23px;
	height: 19px;
	flex-shrink: 0;
`;

const MyExperience = () => {
	return (
		<StyledMyExperience id="my_expriences">
			<StyledHeader>
				<StyledHeaderBold>My Experiences</StyledHeaderBold>
			</StyledHeader>
			<StyledDesc>
				<Line2 />
				<Line>
					<StyledInfo color="#1203DF">
						<Dot />
						UI/UX Designer
					</StyledInfo>
					<Dashed />
					<StyledInfoDiv>
						<StyledInfo>2024-Present ,</StyledInfo>
						<Logo>
							<AminaLogo src="../images/aminagroup-logo-1 1.png" />
						</Logo>
						<StyledInfo>Amina Group</StyledInfo>
					</StyledInfoDiv>
				</Line>
				<StyledItems>
					{items?.map((item) => (
						<StyledItem>
							<Dot color="#003AD0" />
							{item}
						</StyledItem>
					))}
				</StyledItems>
				<Line>
					<StyledInfo>
						<Dot />
						Fashion Designer
					</StyledInfo>
					<Dashed />
					<StyledInfo>2022-2024</StyledInfo>
				</Line>
			</StyledDesc>
		</StyledMyExperience>
	);
};

export default MyExperience;
