import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";
import LoginAndRegister from "./Pages/LoginAndRegister";
import Home from "./Pages/Home";
import CardsAndOthers from "./Pages/CardsAndOthers";
import OtherPages from "./Pages/OtherPages";

const StyledH4 = styled.h4`
	font-size: 24px;
	font-weight: 500;
	margin-bottom: 16px;
	@media ${device.tablet} {
		font-size: 20px !important;
		margin-bottom: 8px;
	}
`;

const ImageSec = styled.div`
	background-color: #f7f7f7;
	border-radius: 56px;
	margin-top: 16px;
	padding: 40px;
`;

const Top = styled.div`
	display: flex;
	gap: 40px;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

const ImageTop = styled.img`
	width: 356px;
	@media ${device.mobile} {
		width: 100%;
	}
`;

const Bottom = styled.div`
	margin-top: 40px;
	display: flex;
	flex-direction: column;
	gap: 40px;
	justify-content: center;
	align-items: center;
`;

const ImageBottom = styled.img`
	width: 726px;
	@media ${device.tablet} {
		width: 100%;
	}
`;

const StyledP1 = styled.p`
	margin-top: 56px;
	font-size: 20px;
	font-weight: 400;
	@media ${device.tablet} {
		font-size: 16px !important;
	}
`;

const DesignSystem = () => {
	return (
		<div>
			<StyledH4>Design System</StyledH4>
			<ImageSec>
				<Top>
					<ImageTop src="../images/pageImages/App100/Font.png" />
					<ImageTop src="../images/pageImages/App100/Colors.png" />
				</Top>
				<Bottom>
					<ImageBottom src="../images/pageImages/App100/Icons.png" />
					<ImageBottom src="../images/pageImages/App100/Components.png" />
				</Bottom>
			</ImageSec>
			<StyledP1>
				Dive into design vibes! I tried that my design have clean lines and easy
				navigation.It’s super friendly and totally stylish .
			</StyledP1>
			<LoginAndRegister />
			<Home />
            <CardsAndOthers />
			<OtherPages />
		</div>
	);
};

export default DesignSystem;
