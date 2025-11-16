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

const UsabilityTesting = ({ curruntPage }) => {
	const CurruntUsability = curruntPage?.usabilityTesting;
	return (
		<div>
			<Title>Usability Testing</Title>
			{CurruntUsability && <CurruntUsability />}
		</div>
	);
};

export default UsabilityTesting;
