import React from "react";
import styled from "styled-components";
import More from "../assets/icons/More";

const StyledCaseStudyItem = styled.div`
	flex-basis: calc(50% - 80px);
	background-color: #fff;
	border-radius: 56px;
	padding: 40px 32px;
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
	gap: 16px;
`;

const StyledTitle = styled.h4`
	font-size: 24px;
	font-weight: 600;
`;

const StyledDesc = styled.p`
	font-size: 18px;
	font-weight: 300;
	line-height: 40px;
`;

const StyledButton = styled.div`
	align-self: end;
	cursor: pointer;
`;

const CaseStudyItem = ({ caseStudy }) => {
	console.log({ caseStudy });
	return (
		<StyledCaseStudyItem>
			<StyledImg src={caseStudy.image} />
			<BottomSection>
				<StyledIntro>
					<StyledTitle>{caseStudy.title}</StyledTitle>
					<StyledDesc>{caseStudy.desc}</StyledDesc>
				</StyledIntro>
				<StyledButton>
					<More {...{ width: 111, height: 80 }} />
				</StyledButton>
			</BottomSection>
		</StyledCaseStudyItem>
	);
};

export default CaseStudyItem;
