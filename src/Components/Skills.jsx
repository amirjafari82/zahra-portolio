import React from "react";
import styled from "styled-components";
import SkillsSvg from "../assets/icons/SkillsSvg";

const StyledSkills = styled.div`
	background-color: #fff;
	border-radius: 56px;
	padding: 26px 20px;
	/* flex-grow: 0.45; */
	flex-basis: 40%;
`;

const StyledHeader = styled.h4`
	font-size: 32px;
	font-weight: 600;
    padding: 14px 16px;
`;

const StyledDesc = styled.div`
	display: flex;
    justify-content: center;
    align-items: end;
`;

const Skills = () => {
	return (
		<StyledSkills>
			<StyledHeader>Skills</StyledHeader>
			<StyledDesc>
				<SkillsSvg />
			</StyledDesc>
		</StyledSkills>
	);
};

export default Skills;
