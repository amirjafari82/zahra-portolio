import React from "react";
import styled from "styled-components";
import SkillsSvg from "../assets/icons/SkillsSvg";
import { device } from "../styles/breakpoints";

const StyledSkills = styled.div`
	background-color: #fff;
	border-radius: 56px;
	padding: 0px;
	border: 6px solid #e6e4ff;
	/* flex-grow: 0.45; */
	flex-basis: 43%;
`;

const StyledHeader = styled.h4`
	font-size: 24px;
	font-weight: 600;
	padding: 80px 0px 0px 80px;
	@media (max-width: 1730px) {
		padding: 40px 0px 0px 40px;
	}
	@media ${device.tablet} {
		font-size: 20px;
	}
`;

const StyledDesc = styled.div`
	display: flex;
	justify-content: center;
	align-items: end;
	width: 100%;
`;

const Skills = () => {
	return (
		<StyledSkills>
			<StyledHeader>Skills</StyledHeader>
			<StyledDesc
				style={{
					display: "block",
					maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
					WebkitMaskImage:
						"linear-gradient(to bottom, black 70%, transparent 100%)",
				}}
			>
				<SkillsSvg />
			</StyledDesc>
		</StyledSkills>
	);
};

export default Skills;
