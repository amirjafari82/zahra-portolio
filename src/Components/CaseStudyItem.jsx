import React from "react";
import styled from "styled-components";
import More from "../assets/icons/More";
import { Link } from "react-router-dom";
import { device } from "../styles/breakpoints";

const StyledCaseStudyItem = styled(Link)`
	text-decoration: none;
	flex-basis: calc(50% - 81px);
	background-color: #fff;
	border-radius: 56px;
	padding: 40px 32px;
	cursor: pointer;
	transition: all 0.3s ease;
	box-shadow: 0px 6px 0px 0px #dbd8ff;
	transition: all 0.3s ease;
	border: 1px solid #dbd8ffbc;
	&:hover {
		box-shadow: 0px 0px 5px 0px #f5f5f582;
		transform: translateY(3px);
		h4 {
			color: #1203df;
		}
	}
`;

const StyledImg = styled.img`
	width: 100%;
`;

const BottomSection = styled.div`
	display: flex;
	gap: 38px;
`;

const StyledIntro = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	gap: 16px;
	height: 200px;
`;

const StyledTitle = styled.h4`
	font-size: 22px;
	font-weight: 600;
	transition: all 0.3s ease;
	color: #040111;
	@media ${device.mobile} {
		font-size: 14px;
	}
`;

const StyledDesc = styled.p`
	font-size: 16px;
	font-weight: 300;
	line-height: 32px;
	color: #252525;
	@media ${device.mobile} {
		font-size: 12px;
		line-height: 24px;
	}
`;

const StyledButton = styled.div`
	align-self: end;
	cursor: pointer;
	@media ${device.mobile} {
		> svg {
			width: 51px;
			height: 37px;
		}
	}
`;

const CaseStudyItem = ({ caseStudy }) => {
	return (
		<StyledCaseStudyItem to={`/caseStudies/${caseStudy.link}`}>
			<StyledImg src={caseStudy.image} />
			<BottomSection>
				<StyledIntro>
					<StyledTitle>{caseStudy.title}</StyledTitle>
					<StyledDesc>{caseStudy.desc}</StyledDesc>
				</StyledIntro>
				<StyledButton>
					<More {...{ width: 68, height: 52 }} />
				</StyledButton>
			</BottomSection>
		</StyledCaseStudyItem>
	);
};

export default CaseStudyItem;
