import React from "react";
import styled from "styled-components";
import { device } from "../../../../styles/breakpoints";

const items = [
	{
		title: "Cards 0/3",
		desc: `In this section, a list of origin and destination cards is displayed,
        which allows the user to switch between them and easily choose the origin and destination card.
        In addition users can add , edit, delete the cards and have user-friendly and secure way to manage their payments .`,
		images: [
			"../images/pageImages/App100/Cards/1.png",
			"../images/pageImages/App100/Cards/2.png",
		],
	},
	{
		title: "Transactions 0/4",
		desc: `The’’ Transactions page’’ includes bank cards and recent transactions that allow users to manage their cards and transactions. 
        I have only displayed the necessary information and by tapping on each transaction to get more details . `,
		images: [
			"../images/pageImages/App100/Transactions/1.png",
			"../images/pageImages/App100/Transactions/2.png",
		],
	},
	{
		title: "Map 0/5",
		desc: `It allows users to see the banks around them, 
        and they can also search for the bank they are looking for and see the time interval 
        and spatial distance to the desired destination.This feature speeds up financial work and 
        helps them to meet their desired needs easily. `,
		images: [
			"../images/pageImages/App100/Map/1.png",
			"../images/pageImages/App100/Map/2.png",
		],
	},
	{
		title: "Profile 0/6",
		desc: `In the profile screen users can view and edit their profile Info, manage notifications 
        and adjust app settings and easily contact support team.Additionally the logout button stands out 
        with its red color and is separated from others to prevent accidental exit.`,
		images: [
			"../images/pageImages/App100/Profile/1.png",
			"../images/pageImages/App100/Profile/2.png",
		],
	},
	{
		title: "Payment and Reciept 0/7",
		desc: `It allows users to switch between their card and wallet and complete their 
        transaction easily and securely using the option they want, and finally receive 
        an electronic receipt with all the details of the transaction which provides transparency payment process .`,
		images: [
			"../images/pageImages/App100/Payment/1.png",
			"../images/pageImages/App100/Payment/2.png",
		],
	},
];

const StyledCards = styled.div`
	margin-top: 56px;
	display: flex;
	flex-direction: column;
	gap: 56px;
`;

const StyledCard = styled.div`
	background-color: #f7f7f8;
	border-radius: 56px;
	padding: 40px;
	display: flex;
	@media ${device.mobile} {
		flex-direction: column-reverse !important;
		align-items: center;
	}
`;

const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: start;
	@media ${device.desktop} {
		gap: 56px;
		width: 100%;
	}
	@media ${device.mobile} {
		flex-direction: column-reverse !important;
		gap: 16px;
		margin-top: 16px;
	}
`;

const RightSide = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;
	align-items: center;
	@media ${device.tablet} {
		width: 90%;
	}
	@media ${device.mobile} {
		justify-content: center;
		width: 100%;
	}
`;

const Desc = styled.p`
	font-size: 20px;
	font-weight: 400;
	color: #575757;
	@media ${device.desktop} {
		font-size: 16px;
	}
`;

const Title = styled.h5`
	font-size: 20px;
	font-weight: 400;
	color: #060607;
	@media ${device.desktop} {
		font-size: 18px;
	}
	@media ${device.mobile} {
		align-self: start !important;
	}
`;

const Image = styled.img`
	width: calc((100% / 2) - 16px);
	@media ${device.mobile} {
		width: calc((100% / 2));
	}
`;

const CardsAndOthers = () => {
	return (
		<StyledCards>
			{items.map((item, index) => {
				const isOdd = (index + 1) % 2 !== 0;
				return (
					<StyledCard
						style={{
							flexDirection: isOdd ? "row" : "row-reverse",
						}}
					>
						<LeftSide>
							<Desc>{item.desc}</Desc>
							<Title
								style={{
									alignSelf: isOdd ? "start" : "end",
								}}
							>
								{item.title}
							</Title>
						</LeftSide>
						<RightSide>
							{item?.images?.map((img) => (
								<Image src={img} />
							))}
						</RightSide>
					</StyledCard>
				);
			})}
		</StyledCards>
	);
};

export default CardsAndOthers;
