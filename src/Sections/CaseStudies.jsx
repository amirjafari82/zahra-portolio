import React from "react";
import styled from "styled-components";
import CaseStudyItems from "../Components/CaseStudyItems";
import More from "../assets/icons/More";
import { device } from "../styles/breakpoints";

const StyledCaseStudies = styled.div`
	margin-top: 80px;
	@media ${device.mobile} {
		font-size: 24px;
		margin-top: 40px;
	}
`;

const Header = styled.h3`
	margin-bottom: 32px;
	font-size: 32px;
	font-weight: 400;
	text-align: center;
	@media ${device.mobile} {
		font-size: 24px;
		margin-bottom: 10px;
	}
`;

const HeaderBold = styled.span`
	font-weight: 600;
	font-size: 40px;
	@media ${device.mobile} {
		font-size: 24px;
	}
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
				<HeaderBold> Case Studies </HeaderBold>
			</Header>
			<CaseStudyItems />
			{/* <MoreButton>
				More Case Studies <More />
			</MoreButton> */}
		</StyledCaseStudies>
	);
};

export default CaseStudies;
