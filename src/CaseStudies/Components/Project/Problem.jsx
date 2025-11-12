import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const Title = styled.h3`
	color: #0051ba;
	font-size: 32px;
	font-weight: 600;
	margin-bottom: 16px;
	margin-top: 56px;
	@media ${device.tablet} {
		font-size: 22px !important;
	}
`;

const StyledP1 = styled.p`
	font-size: 20px;
	font-weight: 400;
	@media ${device.tablet} {
		font-size: 16px !important;
	}
`;

const Problem = ({ curruntPage }) => {
	const problem = curruntPage?.problem;
	return (
		<div>
			<Title>Problem</Title>
			<StyledP1>{problem}</StyledP1>
		</div>
	);
};

export default Problem;
