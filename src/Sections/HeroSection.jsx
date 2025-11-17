import React from "react";
import styled from "styled-components";
import Zahra from "../assets/icons/Zahra";
import { device } from "../styles/breakpoints";

const StyledHero = styled.div`
	margin-top: 40px;
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
	background: linear-gradient(
		90deg,
		#f7f8f9 0%,
		rgb(136 157 255 / 31%) 50%,
		#f7f8f9 100%
	);
	border: 1px solid #a6bcff;
	background-color: #fff;
	padding: 40px 8px;
	border-radius: 56px;
	margin-top: 24px;
	width: 65%;
	margin-right: auto;
	margin-left: auto;
	@media ${device.desktop} {
		width: calc(100% - 16px);
	}
`;

const StyledInfoP = styled.p`
	width: 100%;
	font-size: 32px;
	@media ${device.desktop} {
		font-size: 20px;
	}
`;

const StyledInfoPBold = styled.span`
	font-weight: 600;
`;

const HeroSection = () => {
	return (
		<StyledHero>
			<StyledIntro>
				<p>
					<span style={{}}>Hi, This is</span>
					<StyledName>Zahra</StyledName>
					<Zahra />
					<StyledName>Jafarinasab</StyledName>
				</p>
			</StyledIntro>
			<StyledInfo>
				<StyledInfoP>
					A product designer focused{" "}
					<StyledInfoPBold>on creating intuitive experiences</StyledInfoPBold>,
					improving workflows, and delivering lasting impact through{" "}
					<StyledInfoPBold>thoughtful design</StyledInfoPBold>.
				</StyledInfoP>
			</StyledInfo>
		</StyledHero>
	);
};

export default HeroSection;
