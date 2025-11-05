import React from "react";
import styled from "styled-components";
import Dashed from "../assets/icons/Dashed";

const StyledMyExperience = styled.div`
	background-color: #fff;
	border-radius: 56px;
	padding: 40px;
	flex-basis: 60%;
`;

const StyledHeader = styled.h4`
	font-size: 32px;
	font-weight: 300;
	margin-bottom: 48px;
`;

const StyledHeaderBold = styled.span`
	font-size: 32px;
	font-weight: 600;
`;

const StyledDesc = styled.div`
	display: flex;
	flex-direction: column;
	gap: 80px;
`;

const Line = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	justify-content: start;
`;

const StyledInfo = styled.span`
	font-weight: 500;
	font-size: 24px;
`;

const MyExperience = () => {
	return (
		<StyledMyExperience>
			<StyledHeader>
				My
				<StyledHeaderBold> Experiences</StyledHeaderBold>
			</StyledHeader>
			<StyledDesc>
				<Line>
					<StyledInfo>UI/UX Designer</StyledInfo>
					<Dashed />
                    <StyledInfo>2024-Present</StyledInfo>
				</Line>
				<Line>
					<StyledInfo>Fashion Designer</StyledInfo>
                    <Dashed />
                    <StyledInfo>2022-2024</StyledInfo>
				</Line>
			</StyledDesc>
		</StyledMyExperience>
	);
};

export default MyExperience;
