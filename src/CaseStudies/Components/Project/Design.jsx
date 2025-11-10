import React from "react";
import styled from "styled-components";

const Title = styled.h3`
	color: #0051ba;
	font-size: 32px;
	font-weight: 600;
	margin-bottom: 16px;
	margin-top: 56px;
`;

const Design = ({ curruntPage }) => {
	const CurruntDesign = curruntPage?.design;
	return (
		<div>
			<Title>Design</Title>
			{<CurruntDesign />}
		</div>
	);
};

export default Design;
