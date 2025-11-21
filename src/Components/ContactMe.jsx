import React from "react";
import styled from "styled-components";
import ZahraLetsTalk from "../assets/icons/ZahraLetsTalk";
import { device } from "../styles/breakpoints";
import LinkedIn from "../assets/icons/LinkedIn";
import Behance from "../assets/icons/Behance";
import Dribble from "../assets/icons/Dribble";
import Message from "../assets/icons/Message";
import Email from "../assets/icons/Email";
import Phone from "../assets/icons/Phone";

const StyledContactMe = styled.div`
	background-color: #fff;
	border-radius: 56px;
	padding: 80px;
	padding-top: 30px;
	border: 6px solid #e6e4ff;
	flex-basis: 48%;
	height: fit-content;
	@media (max-width: 1730px) {
		padding: 40px;
	}
`;

const StyledHeader = styled.h4`
	font-size: 24px;
	font-weight: 600;
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
	width: 285px;

	@media (max-width: 1660px) {
		width: 220px;
	}

	@media (max-width: 1430px) {
		width: 50%;
	}

	@media ${device.mobile} {
		width: 100%;
	}
`;

const contactItems = [
	{
		link: "https://www.linkedin.com/in/zahrajafarin",
		icon: LinkedIn,
	},
	{
		link: "https://www.behance.net/zahrajafarin",
		icon: Behance,
	},
	{
		link: "https://dribbble.com/zahrajafarin",
		icon: Dribble,
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
	border-radius: 100%;
	border: 1px solid #d1d1d1;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.3s ease;
	width: 72px;
	height: 72px;
	> svg {
		width: 40px;
		height: 40px;
	}
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
		width: 56px;
		height: 56px;
		> svg {
			width: 30px;
			height: 30px;
		}
	}

	@media ${device.mobile} {
		width: 50px;
		height: 50px;
		> svg {
			width: 30px;
			height: 30px;
		}
	}
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	gap: 36px;
	@media (max-width: 1430px) {
		gap: 12px;
		width: 100%;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: row;
	gap: 28px;
	align-items: center;
	> span {
		font-size: 20px;
	}
	@media (max-width: 1730px) {
		gap: 12px;
	}

	@media ${device.mobile} {
		> span {
			font-size: 16px;
		}
	}

	@media ${device.mobileSm} {
		> span {
			font-size: 12px;
		}
	}
`;

const Links = styled.div`
	display: flex;
	flex-direction: column;
	gap: 28px;
	@media (max-width: 1430px) {
		width: 100%;
		gap: 8px;
	}
`;

const Desc = styled.div`
	display: flex;
	align-items: end;
	justify-content: space-between;
	@media (max-width: 1430px) {
		flex-direction: column;
	}
`;

const IconSec = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 72px;
	height: 72px;
	border-radius: 100%;
	background-color: #f7f8f9;
	@media ${device.mobileSm} {
		width: 40px;
		height: 40px;
		> svg {
			width: 20px;
			height: 20px;
		}
	}
`;

const ContactMe = () => {
	return (
		<StyledContactMe id="contact_me">
			<Desc>
				<Info>
					<StyledHeader>
						<StyledHeaderBold>Contact Me</StyledHeaderBold>
					</StyledHeader>
					<Content>
						<IconSec>
							<Email
								style={{
									flexShrink: 0,
								}}
							/>
						</IconSec>
						<span>zahrajfnsb@gmail.com</span>
					</Content>
					<Content>
						<IconSec>
							<Phone
								style={{
									flexShrink: 0,
								}}
							/>
						</IconSec>
						<span>+98-919735-0238</span>
					</Content>
				</Info>
				<Links>
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
				</Links>
			</Desc>
		</StyledContactMe>
	);
};

export default ContactMe;
