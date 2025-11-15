import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const StyledItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: start;
	gap: 20px;
	border: 1px solid #d9d9d9;
	border-radius: 48px;
	padding: 20px;
	background-color: #ffffff;
    width: 80%;
`;

const Title = styled.h5`
	background-color: #f1f5fd;
	padding: 18px 16px;
	border-radius: 54px;
    font-size: 20px;
    font-weight: 500;
    @media ${device.tablet} {
		font-size: 16px !important;
	}
`;

const Desc = styled.div`
	font-size: 16px;
	font-weight: 300;
    @media ${device.tablet} {
		font-size: 12px !important;
	}
`;

const InterviewItem = ({ item }) => {
	return (
		<StyledItem>
			<Title>{item?.title}</Title>
			<Desc>{item?.description}</Desc>
		</StyledItem>
	);
};

export default InterviewItem;
