import React from "react";
import styled from "styled-components";
import { device } from "./../../../../styles/breakpoints";

const StyledHome = styled.div`
	background-color: #060607;
	border-radius: 56px;
	padding: 46px 34px;
	margin-top: 56px;
`;

const Title = styled.h5`
	color: #fdfeff;
	font-size: 20px;
	font-weight: 400;
`;

const TopSide = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30%;
	margin: 0 auto;
	@media ${device.desktop} {
		display: none;
	}
`;

const BottomSide = styled.div`
	margin-top: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 32px;
`;

const Side = styled.div`
	display: flex;
	flex-direction: column;
	gap: 45px;
	align-items: center;
	justify-content: center;
	flex-basis: 30%;
	@media ${device.desktop} {
		display: none;
	}
`;

const ImageSide = styled.div`
	width: 379px;
	text-align: center;
`;

const Image = styled.img`
	margin: 0 auto;
	width: 100%;
`;

const StyledItem = styled.div`
	background-color: #fdfeff;
	padding: 24px;
	border-radius: 40px;
	width: fit-content;
`;

const ItemTitle = styled.p`
	color: #0f1fd1;
	font-size: 20px;
	font-weight: 500;
`;

const ItemDesc = styled.p`
	color: #060607;
	font-size: 16px;
	font-weight: 400;
`;

const Home = () => {
	return (
		<StyledHome>
			<Title>Home 0/2</Title>
			<TopSide>
				<StyledItem>
					<ItemTitle>QR code</ItemTitle>
					<ItemDesc>
						The QR code scanning features allows users to easily and quickly
						make payments,transfer money and acces account information .
					</ItemDesc>
				</StyledItem>
			</TopSide>
			<BottomSide>
				<Side>
					<StyledItem>
						<ItemTitle>Bill payment</ItemTitle>
						<ItemDesc>
							The bill payment feature allows users to convinietly settles ther
							bills through the app which includes electricity, phone bills and
							other things .
						</ItemDesc>
					</StyledItem>
					<StyledItem>
						<ItemTitle>Recharge SIM</ItemTitle>
						<ItemDesc>
							The SIM Card recharge feature allows users top up their mobile
							effortless with no need to another app in any situation.
						</ItemDesc>
					</StyledItem>
					<StyledItem>
						<ItemTitle>Internet Package</ItemTitle>
						<ItemDesc>
							The internet mobile purchase let users easily buy their package
							with their bank account with transparent reciept and essential
							details .
						</ItemDesc>
					</StyledItem>
				</Side>
				<ImageSide>
					<Image src="../images/pageImages/App100/Home/Home.png" />
				</ImageSide>
				<Side>
					<StyledItem>
						<ItemTitle>Bill payment</ItemTitle>
						<ItemDesc>
							The bill payment feature allows users to convinietly settles ther
							bills through the app which includes electricity, phone bills and
							other things .
						</ItemDesc>
					</StyledItem>
					<StyledItem>
						<ItemTitle>Recharge SIM</ItemTitle>
						<ItemDesc>
							The SIM Card recharge feature allows users top up their mobile
							effortless with no need to another app in any situation.
						</ItemDesc>
					</StyledItem>
					<StyledItem>
						<ItemTitle>Internet Package</ItemTitle>
						<ItemDesc>
							The internet mobile purchase let users easily buy their package
							with their bank account with transparent reciept and essential
							details .
						</ItemDesc>
					</StyledItem>
				</Side>
			</BottomSide>
		</StyledHome>
	);
};

export default Home;
