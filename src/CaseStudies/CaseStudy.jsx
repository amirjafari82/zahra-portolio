import React from "react";
import { useParams } from "react-router-dom";
import { caseItems } from "./items";
import styled from "styled-components";
import Header from "./Components/Header";
import ProjectDesc from "./Components/Project/ProjectDesc";
import { device } from "../styles/breakpoints";

const StyledCaseStudy = styled.div`
	margin: 124px 160px;
	@media ${device.desktopLgMore} {
		margin: 24px 16px;
	}
`;

const CaseStudy = () => {
	const { caseStudy } = useParams();

	const curruntPage = caseItems[caseStudy];

	return (
		<StyledCaseStudy>
			<Header {...{ curruntPage }} />
			<ProjectDesc {...{ curruntPage }} />
		</StyledCaseStudy>
	);
};

export default CaseStudy;
