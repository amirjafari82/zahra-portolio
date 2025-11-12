import React from "react";
import styled from "styled-components";
import ZahraLetsTalk from "../assets/icons/ZahraLetsTalk";
import { device } from "../styles/breakpoints";

const StyledContactMe = styled.div`
	background-color: #fff;
	border-radius: 56px;
	padding: 40px;
	border: 1px solid #dadada;
	flex-basis: 60%;
`;

const StyledHeader = styled.h4`
	font-size: 32px;
	font-weight: 300;
	margin-bottom: 48px;
	@media ${device.tablet} {
		font-size: 20px;
	}
`;

const StyledHeaderBold = styled.span`
	font-size: 32px;
	font-weight: 600;
	@media ${device.tablet} {
		font-size: 20px;
	}
`;

const Logo = styled.div`
	text-align: right;
`;

const ContactMe = () => {
	return (
		<StyledContactMe>
			<StyledHeader>
				<StyledHeaderBold>Contact </StyledHeaderBold>
				Me
			</StyledHeader>
			<Logo>
				<ZahraLetsTalk />
			</Logo>
		</StyledContactMe>
	);
};

export default ContactMe;
