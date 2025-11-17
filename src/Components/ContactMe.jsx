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
	font-size: 24px;
	font-weight: 600;
	padding: 14px 16px;
	@media ${device.tablet} {
		font-size: 20px;
	}
`;

const StyledHeaderBold = styled.span`
	font-size: 24px;
	font-weight: 600;
	@media ${device.tablet} {
		font-size: 20px;
	}
`;

const Logo = styled.div`
	text-align: center;
`;

const StyledSvg = styled.img`
	margin-left: 200px;
	@media ${device.tablet} {
		width: 250px;
		margin-left: 150px;
	}

	@media ${device.mobile} {
		width: 100%;
		margin-left: 0;
	}
`;

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
		fill: "disable",
	},
];

const StyledItems = styled.div`
	display: flex;
	flex-direction: row;
	gap: 32px;
	justify-content: center;
	align-items: center;
	margin-top: 24px;
	@media ${device.tablet} {
		gap: 16px;
	}

	@media ${device.mobile} {
		gap: 24px;
	}
`;

const StyledItem = styled.div`
	padding: 20px;
	border-radius: 100%;
	border: 1px solid #d1d1d1;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.3s ease;
	&:hover {
		border: 1px solid #1203df;
		> svg {
			fill: ${(props) => (props.fill == "disable" ? "none" : "#1203DF")};
			transition: all 0.3s ease;
			> path {
				transition: all 0.3s ease;
				stroke: #1203df;
			}
		}
	}
	@media ${device.tablet} {
		padding: 12px;
		> svg {
			width: 20px;
			height: 20px;
		}
	}

	@media ${device.mobile} {
		padding: 8px;
		width: 50px;
		height: 50px;
		> svg {
			width: 36px;
			height: 36px;
		}
	}
`;

const ContactMe = () => {
	return (
		<StyledContactMe>
			<StyledHeader>
				<StyledHeaderBold>Contact Me</StyledHeaderBold>
			</StyledHeader>
			<Logo>
				<StyledSvg src="./images/ContactMe.svg" />
			</Logo>
			<StyledItems>
				{contactItems.map((item) => {
					const Icon = item.icon;
					return (
						<StyledItem fill={item?.fill}>
							<Icon />
						</StyledItem>
					);
				})}
			</StyledItems>
		</StyledContactMe>
	);
};

export default ContactMe;
