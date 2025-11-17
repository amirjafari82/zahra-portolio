import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";
import Tick from "./../../../assets/icons/Tick";

const items = [
	"For quick and easy access for users who are already familiar with Achareh, the main CTA is placed in the hero section of the website, allowing them to immediately enter and submit their service request.",
	"The service categories were unified in terms of color palette and style.",
	"Due to the high importance of discounts and keeping users informed about them, we added this section.",
	"The steps for using the app and submitting a service request are clearly explained so that users who are not familiar with the process can understand it right from the start.",
	"To increase transparency for users, the differences between the Achareh website and its competitors have been clearly explained.",
	"To build greater trust among users, we abbreviated the service recipient’s name and clearly indicated which service provider completed the job.",
	"To address the needs of users who require same-day or urgent services, we added an “Express Services” option.",
	"The Achareh Partner Section is designed for service providers who are interested in collaborating with Achareh.",
	"We used a bottom navigation instead of a menu.",
];

const StyledMain = styled.div`
	margin-top: 36px;
`;

const StyledH4 = styled.h4`
	font-size: 24px;
	font-weight: 500;
	margin-bottom: 8px;
	@media ${device.tablet} {
		font-size: 20px !important;
	}
`;

const StyledP1 = styled.p`
	font-size: 16px;
	margin-bottom: 24px;
	@media ${device.tablet} {
		font-size: 14px !important;
	}
`;

const StyledCard = styled.div`
	padding: 40px 21px;
	background-color: #f8f6f6;
	margin-top: 16px;
	border-radius: 56px;
	display: flex;
	flex-direction: column;
	gap: 24px;
	@media ${device.tablet} {
	}
`;

const Images = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const ImageSec = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
`;

const Title = styled.span`
	font-size: 16px;
	font-weight: 400;
`;

const Image = styled.img`
	width: 50%;
	@media ${device.tablet} {
		width: 100%;
	}
`;

const ContentSec = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: start;
`;

const Content = styled.div`
	display: flex;
	gap: 16px;
	align-items: center;
`;

const Text = styled.p``;

const UI = () => {
	return (
		<StyledMain>
			<StyledH4>UI</StyledH4>
			<StyledP1>
				By maintaining the brand’s visual identity and focusing on improving the
				user experience, we carried out the redesign — and here you can see the
				final result.
			</StyledP1>
			<StyledCard>
				<Images>
					{Array.from({ length: 2 }, (_, i) => i + 1).map((image, index) => {
						return (
							<ImageSec key={index}>
								<Title>
									{image == 1
										? "Home Page"
										: "Cleaning and Hospitality Services Page"}
								</Title>
								<Image
									src={`../../../images/pageImages/Achare/UI${image}.png`}
								/>
							</ImageSec>
						);
					})}
				</Images>
				<ContentSec>
					{items.map((item, index) => {
						return (
							<Content key={index}>
								<Tick
									style={{
										flexShrink: 0,
									}}
								/>
								<Text>{item}</Text>
							</Content>
						);
					})}
				</ContentSec>
			</StyledCard>
		</StyledMain>
	);
};

export default UI;
