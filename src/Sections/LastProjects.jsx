import React from "react";
import styled from "styled-components";
import Carousel from "../Components/Carousel";
import More from "../assets/icons/More";

const StyledLastProject = styled.div`
	margin-top: 64px;
	text-align: center;
`;

const LastHeader = styled.h3`
	font-size: 32px;
	font-weight: 300;
`;

const LastHeaderBold = styled.span`
	font-weight: 600;
`;

const MoreButton = styled.button`
	border-radius: 56px;
	background-color: #fff;
	display: flex;
	align-items: center;
	padding: 20px 32px;
	border: none;
	gap: 10px;
	justify-content: center;
	margin: 32px auto 0px auto;
	color: #003eba;
	font-size: 20px;
	font-weight: 600;
	cursor: pointer;
	box-shadow: 0px 6px 0px 0px #dbd8ff;
	transition: all 0.3s ease;
	border: 1px solid #dbd8ffbc;
	&:hover {
		box-shadow: 0px 0px 5px 0px #f5f5f582;
		transform: translateY(3px);
	}
`;
const LastProjects = () => {
	return (
		<StyledLastProject>
			<LastHeader>
				UI <LastHeaderBold>Projects</LastHeaderBold>
			</LastHeader>
			<Carousel />
			<MoreButton>
				More on Dribble <More />
			</MoreButton>
		</StyledLastProject>
	);
};

export default LastProjects;
