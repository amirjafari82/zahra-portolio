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
	width: 100%;
	position: relative;
	height: fit-content;
	height: 296px;
	@media (max-width: 1660px) {
		height: 258px;
	}
	@media (max-width: 1430px) {
		margin-top: 47%;
	}

	@media (max-width: 1024px) {
		height: 366px;
		margin-top: 0;
	}

	@media (max-width: 768px) {
		height: 300px;
		margin-top: 0;
	}

	@media (max-width: 600px) {
		height: 200px;
		margin-top: 0;
	}
	@media (max-width: 425px) {
		height: 145px;
		margin-top: 0;
	}
`;

const Image = styled.img`
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 10;
`;

const Skills = () => {
	return (
		<StyledSkills>
			<StyledHeader>Skills</StyledHeader>
			<StyledDesc
				style={{
					maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
					WebkitMaskImage:
						"linear-gradient(to bottom, black 70%, transparent 100%)",
				}}
			>
				<Image src="../images/Skills.png" />
			</StyledDesc>
		</StyledSkills>
	);
};

export default Skills;
