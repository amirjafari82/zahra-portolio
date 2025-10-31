import React from "react";
import styled from "styled-components";
import Carousel from "../Components/Carousel";
import More from "../assets/icons/More";

const StyledLastProject = styled.div`
	margin-top: 64px;
	text-align: center;
	padding-bottom: 200px;
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
	gap: 8px;
	box-shadow: 0px 4px 0px 0px #e3e3e3;
	justify-content: center;
	margin: 32px auto 0px auto;
	color: #003eba;
	font-size: 20px;
	font-weight: 600;
	cursor: pointer;
`;
const LastProjects = () => {
	return (
		<StyledLastProject>
			<LastHeader>
				Last <LastHeaderBold>Projects</LastHeaderBold>
			</LastHeader>
			<Carousel />
			<MoreButton>
				More on Dribble <More />
			</MoreButton>
		</StyledLastProject>
	);
};

export default LastProjects;
