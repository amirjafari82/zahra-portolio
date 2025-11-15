import React from "react";
import styled from "styled-components";
import ZahraLetsTalk from "../assets/icons/ZahraLetsTalk";
import { device } from "../styles/breakpoints";
import LinkedIn from "../assets/icons/LinkedIn";
import Behance from "../assets/icons/Behance";
import Dribble from "../assets/icons/Dribble";
import Message from "../assets/icons/Message";

const StyledContactMe = styled.div`
	background-color: #fff;
	border-radius: 56px;
	padding: 40px;
	border: 6px solid #e6e4ff;
	flex-basis: 60%;
`;

const StyledHeader = styled.h4`
	font-size: 32px;
	font-weight: 300;
	margin-bottom: 48px;
	@media ${device.tablet} {
		font-size: 20px;
	}
`;

const StyledHeaderBold = styled.span`
	font-size: 32px;
	font-weight: 600;
	@media ${device.tablet} {
		font-size: 20px;
	}
`;

const Logo = styled.div`
	text-align: center;
`;

const StyledSvg = styled.img``;

const contactItems = [
	{
		link: "",
		icon: LinkedIn,
	},
	{
		link: "",
		icon: Behance,
	},
	{
		link: "",
		icon: Dribble,
	},
	{
		link: "",
		icon: Message,
	},
];

const StyledItems = styled.div`
	display: flex;
	flex-direction: row;
	gap: 32px;
	justify-content: center;
	align-items: center;
	margin-top: 24px;
`;

const StyledItem = styled.div`
	padding: 20px;
	border-radius: 100%;
	border: 1px solid #d1d1d1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ContactMe = () => {
	return (
		<StyledContactMe>
			<StyledHeader>
				<StyledHeaderBold>Contact </StyledHeaderBold>
				Me
			</StyledHeader>
			<Logo>
				<StyledSvg src="./images/ContactMe.svg" />
			</Logo>
			<StyledItems>
				{contactItems.map((item) => {
					const Icon = item.icon;
					return (
						<StyledItem>
							<Icon />
						</StyledItem>
					);
				})}
			</StyledItems>
		</StyledContactMe>
	);
};

export default ContactMe;
