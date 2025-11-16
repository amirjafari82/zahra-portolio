import React from "react";
import ProjectOverView from "./ProjectOverView";
import styled from "styled-components";
import Problem from "./Problem";
import Research from "./Research";
import Design from "./Design";
import UsabilityTesting from "./UsabilityTesting";

const StyledProjectDesc = styled.div`
	margin-top: 64px;
`;

const ProjectDesc = ({ curruntPage }) => {
	return (
		<StyledProjectDesc>
			<ProjectOverView {...{ curruntPage }} />
			<Problem {...{ curruntPage }} />
			<Research {...{ curruntPage }} />
			<Design {...{ curruntPage }} />
			{/* <UsabilityTesting {...{ curruntPage }} /> */}
		</StyledProjectDesc>
	);
};

export default ProjectDesc;
