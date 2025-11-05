import React from "react";
import styled from "styled-components";

const StyledContactMe = styled.div`
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

const ContactMe = () => {
	return (
		<StyledContactMe>
			<StyledHeader>
                <StyledHeaderBold>Contact </StyledHeaderBold>
                Me
            </StyledHeader>
		</StyledContactMe>
	);
};

export default ContactMe;
