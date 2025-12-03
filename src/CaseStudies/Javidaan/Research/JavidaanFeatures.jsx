import React from "react";
import styled from "styled-components";
import Ellipse from "../../../assets/icons/Ellipse";
import { device } from "../../../styles/breakpoints";

const cardItems = [
	{
		title: "Basic Features",
		titleColor: "#000000",
		items: [
			"Ranking",
			"Page crawling",
			"Link analysis",
			"Google Trends",
			"Keyword Canibalization",
		],
	},
	{
		title: "Key Features",
		titleColor: "#000000",
		items: [
			"Advertorial management",
			"AI-powered content generation",
			"Reports",
			"Ranking History",
			"rank change status",
			"Competitor rank comparison",
		],
	},
	{
		title: "Future Features",
		titleColor: "#1203DF",
		items: [
			"An integrated SEO assistant chatbot to simplify workflows and support users throughout their analysis.",
			"An automated internal linking feature that optimizes site structure and improves SEO efficiency.",
			"A fully automated content pipeline that handles everything from generation to publishing and link integration.",
		],
	},
];

const StyledJavidaanFeatures = styled.div`
	margin-top: "82px";
`;

const StyledH4 = styled.h4`
	font-size: 24px;
	font-weight: 500;
	display: inline-block;
	@media ${device.tablet} {
		font-size: 20px !important;
		display: block;
	}
`;

const StyledItems = styled.div`
	display: inline-flex;
	gap: 40px;
	align-items: center;
	justify-content: start;
	margin-left: 64px;
	@media ${device.tablet} {
		margin-top: 8px;
		margin-left: 0;
		gap: 12px;
		> span {
			font-size: 16px !important;
			width: fit-content;
		}
	}
`;

const StyledP1 = styled.p`
	font-size: 20px;
	margin-top: 16px;
	@media ${device.tablet} {
		font-size: 16px !important;
	}
`;

const StyledCards = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: start;
	margin-top: 16px;
	gap: 56px;
	@media ${device.desktop} {
		justify-content: space-between;
		gap: 16px;
	}
	@media ${device.tabletSm} {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const StyledCard = styled.div`
	flex-basis: 18%;
	background-color: #f6f6f6;
	border-radius: 40px;
	padding: 24px 24px 0px 24px;
	height: 380px;
	@media ${device.desktop} {
		flex-basis: calc(100% / 3);
	}
	@media ${device.tabletSm} {
		width: 80% !important;
		padding: 16px 16px 0px 16px;
		> h4 {
			font-size: 18px !important;
		}
	}
`;

const JavidaanFeatures = () => {
	return (
		<StyledJavidaanFeatures
			style={{
				marginTop: "82px",
			}}
		>
			<div>
				<StyledH4>Features</StyledH4>
			</div>
			<StyledP1
				style={{
					marginTop: "16px",
					fontSize: "20px",
				}}
			>
				After looking at competitors’ features and having several discussions
				with the tech and marketing teams, we decided which features could
				realistically be included in Javidan’s first version and still make an
				impact in the market.
				<strong> The plan was to create low-fidelity wireframes</strong>,
				present them, and figure out the best way to showcase each feature.
			</StyledP1>
			<StyledCards>
				{cardItems.map((card) => {
					return (
						<StyledCard>
							<h4
								style={{
									color: card.titleColor,
									fontSize: "20px",
									fontWeight: 500,
								}}
							>
								{card.title}
							</h4>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									maskImage:
										"linear-gradient(to bottom, black 70%, transparent 100%)",
									WebkitMaskImage:
										"linear-gradient(to bottom, black 70%, transparent 100%)",
								}}
							>
								{card?.items?.map((item) => {
									return (
										<div
											style={{
												display: "flex",
												alignItems: "baseline",
												gap: "8px",
												marginTop: "20px",
											}}
										>
											<div>
												<Ellipse />
											</div>
											<span
												style={{
													fontSize: "14px",
												}}
											>
												{item}
											</span>
										</div>
									);
								})}
							</div>
						</StyledCard>
					);
				})}
			</StyledCards>
		</StyledJavidaanFeatures>
	);
};

export default JavidaanFeatures;
