import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const StyledMain = styled.div`
	margin-top: 18px;
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

const StyledCard = styled.div`
	padding: 12px;
	border: 1px solid #b9bbba;
	margin-top: 20px;
	border-radius: 56px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 32px;
	@media ${device.mobile} {
		flex-direction: column;
		padding: 24px;
	}
`;

const Image = styled.img`
	width: calc((100% / 3) - 32px);
	@media ${device.mobile} {
		width: 100%;
	}
`;

const Sketch = () => {
	return (
		<StyledMain>
			<StyledH4>Sketch</StyledH4>
			<StyledP1>
				After summarizing the overall findings, we created the initial sketches
				for the landing page and the user service request flow, giving shape and
				structure to our idea.
			</StyledP1>
			<StyledCard>
				{Array.from({ length: 3 }, (_, i) => i + 1).map((img) => {
					return (
						<Image src={`../../../images/pageImages/Achare/Sketch${img}.png`} />
					);
				})}
			</StyledCard>
		</StyledMain>
	);
};

export default Sketch;
