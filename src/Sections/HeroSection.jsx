import React from "react";
import styled from "styled-components";
import Zahra from "../assets/icons/Zahra";
import { device } from "../styles/breakpoints";
import More from "../assets/icons/More";

const StyledHero = styled.div`
	margin-top: 66px;
	text-align: center;
`;

const StyledIntro = styled.div`
	font-weight: 300;
	font-size: 24px;
	> p {
		display: flex;
		justify-content: center;
		align-items: end;
		gap: 8px;
	}
	@media ${device.desktop} {
		font-size: 18px;
	}

	@media ${device.mobileSm} {
		font-size: 14px;
		> p {
			gap: 4px;
		}

		> p > svg {
			width: 46px;
			height: 46px;
		}
	}
`;

const StyledName = styled.span`
	background-color: #d3dbff;
	padding: 4px 12px;
	border-radius: 56px;
	font-size: 24px !important;
	font-weight: 600;
	@media ${device.desktop} {
		font-size: 18px !important;
	}
	@media ${device.mobileSm} {
		font-size: 14px !important;
		padding: 2px 6px;
	}
`;

const StyledInfo = styled.div`
	background-color: #fff;
	padding: 24px 16px;
	border-radius: 56px;
	margin-top: 24px;
	width: 65%;
	box-shadow: 0px 6px 0px 0px #d3dbff;
	margin-right: auto;
	margin-left: auto;
	@media ${device.desktop} {
		width: calc(100% - 32px);
	}
`;

const StyledInfoP = styled.p`
	width: 100%;
	font-size: 20px;
	@media ${device.tablet} {
		font-size: 16px;
	}
`;

const StyledInfoPBold = styled.span`
	font-weight: 600;
`;

const StyledReadMore = styled.div`
	margin-top: 16px;
`;

const StyledMore = styled.span`
	display: flex;
	align-items: center;
	color: #003eba;
	font-size: 18px;
	justify-content: center;
	gap: 8px;
	cursor: pointer;
	transition: transform 0.3s ease, font-weight 0.3s ease;	
	svg path,
	svg rect {
		transition: stroke-width 0.3s ease-in;
	}
	&:hover {
		transform: translateX(2px);
		font-weight: 500;
		svg path {
			stroke-width: 1.8;
		}
		svg rect {
			stroke-width: 1.8;
		}
	}
`;

const HeroSection = () => {
	return (
		<StyledHero>
			<StyledIntro>
				<p>
					<span>This is</span>
					<StyledName>Zahra Jafarinasab</StyledName>
				</p>
			</StyledIntro>
			<StyledInfo>
				<StyledInfoP>
					A product designer focused{" "}
					<StyledInfoPBold>on creating intuitive experiences</StyledInfoPBold>,
					improving workflows, and delivering lasting impact through{" "}
					<StyledInfoPBold>thoughtful design</StyledInfoPBold>.
				</StyledInfoP>
				<StyledReadMore>
					<StyledMore
						onClick={() => {
							const element = document.getElementById("about_me");
							element.scrollIntoView({ behavior: "smooth", block: "center" });
						}}
					>
						Read More <More width={41} height={26} />
					</StyledMore>
				</StyledReadMore>
			</StyledInfo>
		</StyledHero>
	);
};

export default HeroSection;
