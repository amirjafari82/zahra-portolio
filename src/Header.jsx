import React, { useEffect } from "react";
import styled from "styled-components";
import Download from "./assets/icons/Download";

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledImage = styled.img`
	width: 102px;
	height: 102px;
	border-radius: 100%;
`;

const StyledNavbar = styled.div`
	display: flex;
	gap: 32px;
	justify-content: center;
	align-items: center;
	background-color: #ffffff;
	padding: 27px 40px;
	border-radius: 100px;
	box-shadow: 0px 4px 0px 0px #d9d9d9;
`;

const StyledItem = styled.a`
	cursor: pointer;
	font-weight: 400;
	font-size: 16px;
	color: #767676;
	transition: 0.3s all ease-in-out;
	&:hover {
		color: #000;
	}
`;

const ResumeDownload = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	padding: 25px 32px;
	border: none;
	border-radius: 56px;
	box-shadow: 0px 4px 0px 0px #e3e3e3;
	gap: 8px;
	font-weight: 600;
	font-size: 16px;
	cursor: pointer;
`;

const items = [
	{
		name: "About me",
		link: "#",
	},
	{
		name: "Portfolio",
		link: "#",
	},
	{
		name: "My Expriences",
		link: "#",
	},
	{
		name: "Contact Me",
		link: "#",
	},
];

export default function Header() {
	
	return (
		<StyledHeader>
			<StyledImage src={"./images/zahra-header.png"} id="img" />
			<StyledNavbar>
				{items.map((i, index) => (
					<StyledItem key={index}>{i.name}</StyledItem>
				))}
			</StyledNavbar>
			<ResumeDownload>
				Resume
				<Download />
			</ResumeDownload>
		</StyledHeader>
	);
}
