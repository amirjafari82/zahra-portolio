import React from "react";
import styled from "styled-components";
import CaseStudyItems from "../Components/CaseStudyItems";
import More from "../assets/icons/More";

const StyledCaseStudies = styled.div`
	margin-top: 164px;
`;

const Header = styled.h3`
	margin-top: 164px;
	font-size: 32px;
	font-weight: 400;
	text-align: center;
`;

const HeaderBold = styled.span`
	font-weight: 600;
	font-size: 40px;
`;

const MoreButton = styled.button`
	border-radius: 56px;
	background-color: #fff;
	display: flex;
	align-items: center;
	padding: 20px 32px;
	border: none;
	gap: 10px;
	box-shadow: 0px 4px 0px 0px #e3e3e3;
	justify-content: center;
	margin: 40px auto 0px auto;
	color: #003eba;
	font-size: 20px;
	font-weight: 600;
	cursor: pointer;
`;

const CaseStudies = () => {
	return (
		<StyledCaseStudies>
			<Header>
				Some <HeaderBold> Case Studies </HeaderBold>
			</Header>
			<CaseStudyItems />
			<MoreButton>
				More Case Studies <More />
			</MoreButton>
		</StyledCaseStudies>
	);
};

export default CaseStudies;
