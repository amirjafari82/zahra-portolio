import React from "react";
import styled from "styled-components";
import Ellipse from "../../../assets/icons/Ellipse";

const items = ["Must Have", "Could Have", "Should Have", "Won’t Have"];

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

const StyledCards = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: start;
	margin-top: 16px;
	gap: 56px;
`;

const StyledCard = styled.div`
	flex-basis: 18%;
	background-color: #f6f6f6;
	border-radius: 40px;
	padding: 24px 24px 0px 24px;
	height: 380px;
`;

const JavidaanFeatures = () => {
	return (
		<div
			style={{
				marginTop: "82px",
			}}
		>
			<div>
				<h4
					style={{
						fontSize: "24px",
						fontWeight: 500,
						display: "inline-block",
					}}
				>
					Features
				</h4>
				<div
					style={{
						display: "inline-flex",
						gap: "40px",
						alignItems: "center",
						justifyContent: "start",
						marginLeft: "64px",
					}}
				>
					{items?.map((d) => (
						<span
							style={{
								color: "#9C9C9C",
								fontSize: "20px",
								fontWeight: 500,
							}}
						>
							{d}
						</span>
					))}
				</div>
			</div>
			<p
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
			</p>
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
		</div>
	);
};

export default JavidaanFeatures;
