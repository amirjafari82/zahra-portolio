import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const StyledProjectOverView = styled.div``;

const Title = styled.h3`
	color: #0051ba;
	font-size: 32px;
	font-weight: 600;
	margin-bottom: 16px;
	@media ${device.tablet} {
		font-size: 22px !important;
	}
`;

const ProjectOverView = ({ curruntPage }) => {
	const OverView =
		curruntPage?.projectOverViewComp || curruntPage?.projectOverViewParag;
	return (
		<StyledProjectOverView>
			<Title>Project Overview</Title>
			{<OverView />}
		</StyledProjectOverView>
	);
};

export default ProjectOverView;
