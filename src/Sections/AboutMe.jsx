import React from "react";
import styled from "styled-components";
import More from "../assets/icons/More";
import { device } from "../styles/breakpoints";

const StyledAboutMe = styled.div`
	border: 6px solid #e6e4ff;
	background-color: #fff;
	border-radius: 56px;
	display: flex;
	align-items: start;
	@media ${device.desktopLgMore} {
		flex-direction: column-reverse;
	}
`;

const LeftSide = styled.div`
	padding: 80px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	flex-basis: 60%;
`;

const ImageSide = styled.div`
	flex-basis: 40%;
	height: 100%;
	@media ${device.desktopLgMore} {
		flex-basis: unset;
		width: 100%;
		height: 200px;
	}
`;

const Image = styled.img`
	border-radius: 0px 56px 56px 0px;
	width: 100%;
	height: 100%;
	@media ${device.desktopLgMore} {
		object-fit: cover;
		border-radius: 56px 56px 0px 0px;
	}
`;

const Header = styled.p`
	font-size: 32px;
	font-weight: 300;
	@media ${device.tablet} {
		font-size: 20px;
	}
`;

const HeaderBold = styled.span`
	font-size: 24px;
	font-weight: 600;
	@media ${device.tablet} {
		font-size: 24px;
	}
`;

const Paragraph = styled.p`
	line-height: 35px;
	@media ${device.tablet} {
		font-size: 14px;
	}
`;

const Bold = styled.span`
	font-weight: 600;
`;

const MoreButton = styled.button`
	margin-top: 12px;
	width: fit-content;
	background-color: #fff;
	padding: 20px 32px;
	border-radius: 56px;
	font-size: 16px;
	font-weight: 500;
	color: #1203df;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 8px;
	box-shadow: 0px 6px 0px 0px #dbd8ff;
	transition: all 0.3s ease;
	border: 1px solid #dbd8ffbc;
	&:hover {
		box-shadow: 0px 0px 5px 0px #f5f5f582;
		transform: translateY(3px);
	}
	@media ${device.tablet} {
		font-size: 14px;
		padding: 12px;
	}
`;

const AboutMe = () => {
	return (
		<StyledAboutMe id="about_me">
			<LeftSide>
				<Header>
					<HeaderBold>About Me</HeaderBold>
				</Header>
				<Paragraph>
					<Bold>Over the past year</Bold>, I've worked on{" "}
					<Bold>varied projects across different fields</Bold> with the goal of
					refining both visual composition and user experience. Most recently,
					I've been a <Bold>product designer on a core product</Bold> in my
					current company and collaborated very closely with the SEO and
					development teams to launch MVP version.
				</Paragraph>
				<Paragraph>
					I also made significant contributions to{" "}
					<Bold>improving team workflows</Bold> by adding a UI/UX review process
					before projects were forwarded to the SEO team, leading to better
					performance and greater client satisfaction.
				</Paragraph>
				<Paragraph>
					Now, I'm especially excited to work on a large product directly,
					applying what I've learned, because I believe that focusing on a
					single product over a period of time allows for greater and more
					lasting impact.
				</Paragraph>

				<MoreButton>
					More Details On LinkedIn <More width={50} height={35} />
				</MoreButton>
			</LeftSide>
			{/* <ImageSide>
				<Image src="./images/Sample.png" width={655} height={650} />
			</ImageSide> */}
		</StyledAboutMe>
	);
};

export default AboutMe;
