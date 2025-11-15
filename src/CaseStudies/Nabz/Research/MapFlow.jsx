import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const items = [
	{
		title: "Site Map",
		image: "../images/pageImages/Nabz/SiteMap.png",
	},
	{
		title: "User Flow",
		image: "../images/pageImages/Nabz/UserFlow.png",
	},
];

const StyledMain = styled.div`
	margin-top: 64px;
	display: flex;
	flex-direction: column;
	gap: 38px;
`;

const StyledCard = styled.div`
	background-color: #fefefe;
	border: 6px solid #f1f5fd;
	padding: 32px;
	border-radius: 40px;
    @media ${device.tablet} {
		padding: 12px 0px 0px 12px;
	}
`;

const StyledTitle = styled.h5`
	font-size: 24px;
	font-weight: 500;
	margin-bottom: 32px;
	@media ${device.tablet} {
		font-size: 20px !important;
	}
    @media ${device.mobile} {
		font-size: 14px !important;
	}
`;

const Image = styled.img`
	width: 100%;
`;

const MapFlow = () => {
	return (
		<StyledMain>
			{items.map((item) => {
				return (
					<StyledCard>
						<StyledTitle>{item.title}</StyledTitle>
						<Image src={item?.image} />
					</StyledCard>
				);
			})}
		</StyledMain>
	);
};

export default MapFlow;
