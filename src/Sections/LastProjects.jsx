import React from "react";
import styled from "styled-components";
import Carousel from "../Components/Carousel";
import More from "../assets/icons/More";
import { device } from "../styles/breakpoints";

const StyledLastProject = styled.div`
	margin-top: 80px;
	text-align: center;
`;

const LastHeader = styled.h3`
	font-size: 32px;
	font-weight: 300;
	margin-bottom: 32px;
	@media ${device.desktopLg} {
		font-size: 24px;
	}
`;

const LastHeaderBold = styled.span`
	font-weight: 600;
	@media ${device.desktopLg} {
		width: 100%;
	}
`;

const MoreButton = styled.a`
	width: fit-content;
	text-decoration: none;
	border-radius: 56px;
	background-color: #fff;
	display: flex;
	align-items: center;
	padding: 20px 32px;
	border: none;
	gap: 10px;
	justify-content: center;
	margin: 0px auto 0px auto;
	color: #003eba;
	font-size: 20px;
	font-weight: 600;
	cursor: pointer;
	box-shadow: 0px 6px 0px 0px #dbd8ff;
	transition: all 0.3s ease;
	border: 1px solid #dbd8ffbc;
	margin-top: 32px;
	&:hover {
		box-shadow: 0px 0px 5px 0px #f5f5f582;
		transform: translateY(3px);
	}
	@media ${device.mobile} {
		font-size: 14px;
		padding: 14px 20px;
	}
`;
const LastProjects = () => {
	return (
		<StyledLastProject>
			<LastHeader>
				<LastHeaderBold>UI Projects</LastHeaderBold>
			</LastHeader>
			<Carousel />
			<MoreButton href="https://dribbble.com/zahrajafarin" target="_blank">
				More on Dribble <More />
			</MoreButton>
		</StyledLastProject>
	);
};

export default LastProjects;
