import React from "react";
import styled from "styled-components";
import { device } from "../../../../styles/breakpoints";

const StyledH4 = styled.h4`
	font-size: 24px;
	font-weight: 500;
	margin-bottom: 16px;
	@media ${device.tablet} {
		font-size: 20px !important;
		margin-bottom: 8px;
	}
`;

const StyledOtherPages = styled.div`
	margin-top: 56px;
`;

const Image = styled.img`
    border-radius: 56px;
    width: 100%;
    margin-top: 16px;
`

const OtherPages = () => {
	return (
		<StyledOtherPages>
			<StyledH4>And other pages...</StyledH4>
            <Image src="../images/pageImages/App100/Other.png" />
		</StyledOtherPages>
	);
};

export default OtherPages;
