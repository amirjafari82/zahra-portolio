import React from "react";
import styled from "styled-components";
import Download from "../assets/icons/Download";
import { device } from "../styles/breakpoints";

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledImage = styled.img`
	width: 80px;
	height: 80px;
	border-radius: 100%;
	@media ${device.desktop} {
		width: 80px;
		height: 80px;
	}
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
	margin-right: 36px;
	@media ${device.desktop} {
		display: none;
	}
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
	border-radius: 56px;
	background-color: #fff;
	display: flex;
	align-items: center;
	padding: 20px 32px;
	border: none;
	gap: 10px;
	justify-content: center;
	font-size: 20px;
	font-weight: 600;
	cursor: pointer;
	box-shadow: 0px 6px 0px 0px #dbd8ff;
	transition: all 0.3s ease;
	border: 1px solid #dbd8ffbc;
	color: #003eba;
	&:hover {
		box-shadow: 0px 0px 5px 0px #f5f5f582;
		transform: translateY(3px);
	}
	@media ${device.desktop} {
		font-size: 14px;
		padding: 16px;
	}
`;

const items = [
	{
		name: "About me",
		link: "about_me",
	},
	{
		name: "Portfolio",
		link: "#",
	},
	{
		name: "My Expriences",
		link: "my_expriences",
	},
	{
		name: "Contact Me",
		link: "contact_me",
	},
];

const ImageSec = styled.div`
	display: flex;
	gap: 12px;
	align-items: center;
`;

const ImageHi = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	align-items: start;
	justify-content: center;
`;

const Hi = styled.span`
	font-weight: 500;
`;

const Glad = styled.span`
	font-weight: 300;
	display: flex;
	align-items: center;
	gap: 4px;
`;

export default function Header({ setShowScroll }) {
	function downloadPDF(url, filename = "file.pdf") {
		const link = document.createElement("a");
		link.href = url;
		link.download = filename;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
	return (
		<StyledHeader>
			<ImageSec>
				<StyledImage src={"./images/zahra-header.png"} id="img" />
				<ImageHi>
					<Hi>Hi!</Hi>
					<Glad>
						<span>Glad to see you</span>
						^_^
					</Glad>
				</ImageHi>
			</ImageSec>
			<StyledNavbar>
				{items.map((i, index) => (
					<StyledItem
						onClick={() => {
							const element = document.getElementById(i.link);
							element.scrollIntoView({ behavior: "smooth", block: "center" });
							setShowScroll(true);
						}}
						key={index}
					>
						{i.name}
					</StyledItem>
				))}
			</StyledNavbar>
			<ResumeDownload
				onClick={() =>
					downloadPDF(
						"./ZahraJafarinasab-Resume.pdf",
						"ZahraJafarinasab-Resume"
					)
				}
			>
				Resume
				<Download />
			</ResumeDownload>
		</StyledHeader>
	);
}
