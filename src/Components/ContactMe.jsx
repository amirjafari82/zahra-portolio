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
	border: 6px solid #e6e4ff;
	flex-basis: 48%;
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
		width: 100%;
	}

	@media ${device.mobile} {
		width: 100%;
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
			width: 30px;
			height: 30px;
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

const Info = styled.div`
	display: flex;
	flex-direction: column;
	gap: 124px;
	margin-top: 56px;
	@media (max-width: 1430px) {
		gap: 12px;
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
`;

const Links = styled.div`
	display: flex;
	flex-direction: column;
`;

const Desc = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 1430px) {
		flex-direction: column;
	}
`;

const ContactMe = () => {
	return (
		<StyledContactMe id="contact_me">
			<StyledHeader>
				<StyledHeaderBold>Contact Me</StyledHeaderBold>
			</StyledHeader>
			<Desc>
				<Info>
					<Content>
						<Email
							style={{
								flexShrink: 0,
							}}
						/>
						<span>zahrajfnsb@gmail.com</span>
					</Content>
					<Content>
						<Phone
							style={{
								flexShrink: 0,
							}}
						/>
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
