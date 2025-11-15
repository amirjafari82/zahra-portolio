import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const StyledMain = styled.div``;

const TitleSec = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	gap: 12px;
	margin-bottom: 16px;
`;

const Title = styled.h4`
	font-size: 16px !important;
	font-weight: 500;
`;

const StyledCards = styled.div`
	background-color: #191919;
	border-radius: 56px;
	padding: 12px;
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
`;

const StyledCard = styled.div`
	background-color: #4159f117;
	border-radius: 48px;
	padding: 24px;
	@media ${device.tablet} {
		flex-basis: 100% !important;
	}
`;

const Challenges = styled(StyledCard)`
	flex-basis: calc(45% - 56px);
`;

const OpenIdeas = styled(StyledCard)`
	flex-basis: calc(55% - 56px);
`;

const Needs = styled(StyledCard)`
	flex-basis: calc(50% - 56px);
`;

const ValuePropositions = styled(StyledCard)`
	flex-basis: calc(50% - 56px);
`;

const CardTitle = styled.span`
	background-color: #ffa33b36;
	color: #ffa33b;
	border-radius: 60px;
	margin-bottom: 20px;
	padding: 6px 12px;
	@media ${device.mobile} {
		font-size: 14px !important;
	}
`;

const StyledList = styled.ul`
	color: #ffffff;
	display: flex;
	flex-direction: column;
	gap: 18px;
	justify-content: center;
	margin-top: 20px;
	margin-left: 24px;
`;

const StyledLi = styled.li`
	font-size: 16px;
	font-weight: 300;
	@media ${device.mobile} {
		font-size: 12px;
	}
`;

const AffinityDiagramItem = ({ item }) => {
	const TitleIcon = item?.icon;
	return (
		<StyledMain>
			<TitleSec>
				<TitleIcon />
				<Title>{item?.title}</Title>
			</TitleSec>
			<StyledCards>
				{item.sections?.map((card, index2) => {
					let Component = "";

					switch (card?.title) {
						case "Challenges":
							Component = Challenges;
							break;
						case "Needs":
							Component = Needs;
							break;

						case "Open ideas":
							Component = OpenIdeas;
							break;

						case "Value propositions":
							Component = ValuePropositions;
							break;
					}
					return (
						<Component key={index2}>
							<CardTitle>{card?.title}</CardTitle>
							<StyledList>
								{card?.options?.map((li, index) => {
									return <StyledLi key={index}>{li}</StyledLi>;
								})}
							</StyledList>
						</Component>
					);
				})}
			</StyledCards>
		</StyledMain>
	);
};

export default AffinityDiagramItem;
