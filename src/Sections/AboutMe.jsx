import React from "react";
import styled from "styled-components";
import More from "../assets/icons/More";

const StyledAboutMe = styled.div`
	margin-top: 40px;
	border: 1px solid #cfcece;
	background-color: #fff;
	border-radius: 56px;
	display: flex;
	align-items: start;
`;

const LeftSide = styled.div`
	padding: 40px 40px 20px 40px;
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

const ImageSide = styled.img`
	border-radius: 0px 56px 56px 0px;
`;

const Header = styled.p`
	font-size: 32px;
	font-weight: 300;
`;

const HeaderBold = styled.span`
	font-size: 40px;
	font-weight: 600;
`;

const Paragraph = styled.p`
	line-height: 35px;
`;

const Bold = styled.span`
	font-weight: 600;
`;

const MoreButton = styled.button`
	margin-top: -10px;
	width: fit-content;
	background-color: #fff;
	border: none;
	padding: 24px;
	border-radius: 56px;
	font-size: 18px;
	font-weight: 500;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 8px;
	transition: all 0.3s ease;
	&:hover {
		box-shadow: 0px 4px 0px 0px #e3e3e3;
		color: #1203df;
	}
`;

const AboutMe = () => {
	return (
		<StyledAboutMe>
			<LeftSide>
				<Header>
					About<HeaderBold> Me</HeaderBold>
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

			<ImageSide src="./images/Sample.png" width={655} height={650} />
		</StyledAboutMe>
	);
};

export default AboutMe;
