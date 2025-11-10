import React from "react";
import styled from "styled-components";

const Title = styled.h3`
	color: #0051ba;
	font-size: 32px;
	font-weight: 600;
	margin-bottom: 16px;
	margin-top: 56px;
`;

const Problem = ({ curruntPage }) => {
	const problem = curruntPage?.problem;
	return (
		<div>
			<Title>Problem</Title>
			<p
				style={{
					fontSize: "20px",
					fontWeight: 400,
				}}
			>
				{problem}
			</p>
		</div>
	);
};

export default Problem;
