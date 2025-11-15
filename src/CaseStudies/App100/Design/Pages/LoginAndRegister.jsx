import React from "react";
import styled from "styled-components";
import { device } from "../../../../styles/breakpoints";

const StyledLoginAndRegister = styled.div`
	background-color: #f7f7f7;
	border-radius: 56px;
	padding: 24px;
	margin-top: 16px;
`;

const Title = styled.h5`
	font-size: 20px;
	font-weight: 400;
	text-align: center;
`;

const Items = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 20px;
	margin-top: 25px !important;
	margin: 0 auto;
	width: 60%;
	@media ${device.desktop} {
		width: 100%;
	}
`;

const Image = styled.img`
	width: calc((100% / 3) - 20px);
	@media ${device.mobile} {
		width: calc((100% / 2) - 20px);
	}
	@media ${device.mobileSm} {
		width: 100%;
	}
`;

const P1 = styled.p`
	text-align: center;
	font-size: 20px;
	color: #73737c;
	width: 50%;
	margin: 24px auto 0px auto;
	@media ${device.desktop} {
		width: 100%;
	}
	@media ${device.mobile} {
		font-size: 16px;
	}
    @media ${device.mobileSm} {
		font-size: 14px;
	}
`;

const LoginAndRegister = () => {
	return (
		<StyledLoginAndRegister>
			<Title>Login And Register 0/1</Title>
			<Items>
				{Array.from({ length: 5 }, (_, i) => i + 1)?.map((img) => {
					return (
						<Image
							src={`../images/pageImages/App100/LoginAndRegister/${img}.png`}
						/>
					);
				})}
			</Items>
			<P1>
				The design and flow of the login pages are designed to be simple and
				effortless and I have avoided unnecessary elements to make sure the user
				has a smooth start .In fact, the user can have their account in the app
				with a phone number and a one-time use code ( OTP ) for verification .
			</P1>
		</StyledLoginAndRegister>
	);
};

export default LoginAndRegister;
