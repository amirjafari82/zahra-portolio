import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const StyledMain = styled.div`
	margin-top: 60px;
`;

const StyledP1 = styled.p`
	font-size: 16px;
	margin-bottom: 24px;
	@media ${device.tablet} {
		font-size: 14px !important;
	}
`;

const StyledCard = styled.div`
	padding: 58px 44px;
	background-color: #f8f6f6;
	margin-top: 16px;
	border-radius: 56px;
	gap: 24px;
	@media ${device.tablet} {
		padding: 24px 12px;
	}
`;

const Images = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: start;
	justify-content: start;
`;

const Image = styled.img`
	width: 20%;
	@media ${device.desktop} {
		width: 25%;
	}

	@media ${device.tablet} {
		width: 50%;
	}

	@media ${device.mobile} {
		width: 100%;
	}
`;

const Wizard = () => {
	return (
		<StyledMain>
			<StyledP1>
				After that, the user is directed straight to the wizard to go through
				the service request steps.
			</StyledP1>
			<StyledCard>
				<Images>
					{Array.from({ length: 9 }, (_, i) => i + 1).map((img) => {
						return (
							<Image
								src={`../../../images/pageImages/Achare/Wizard${img}.png`}
							/>
						);
					})}
				</Images>
			</StyledCard>
		</StyledMain>
	);
};

export default Wizard;
