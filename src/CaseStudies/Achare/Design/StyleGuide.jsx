import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const StyledMain = styled.div`
	margin-top: 36px;
`;

const StyledH4 = styled.h4`
	font-size: 24px;
	font-weight: 500;
	margin-bottom: 8px;
	@media ${device.tablet} {
		font-size: 20px !important;
	}
`;

const StyledP1 = styled.p`
	font-size: 16px;
	margin-bottom: 24px;
	@media ${device.tablet} {
		font-size: 14px !important;
	}
`;

const Images = styled.div``;

const Image = styled.img`
	width: 60%;
	@media ${device.mobile} {
		width: 100%;
	}
`;

const StyleGuide = () => {
	return (
		<StyledMain>
			<StyledH4>Style Guide</StyledH4>
			<StyledP1>
				After that, we created a style guide and designed a service request flow
				based on it, implementing our suggestions according to the collected
				data. The fonts and colors used all belong to the Achareh brand, and we
				made no modifications to them.
			</StyledP1>
			<Images>
				{Array.from({ length: 3 }, (_, i) => i + 1).map((img) => {
					return (
						<Image
							src={`../../../images/pageImages/Achare/StyleGuide${img}.png`}
						/>
					);
				})}
			</Images>
		</StyledMain>
	);
};

export default StyleGuide;
