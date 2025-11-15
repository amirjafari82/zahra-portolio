import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const featuresData = [
	{
		category: "Key Features",
		color: "#000",
		items: [
			"Addressing system on the map",
			"Displaying user reviews",
			"Displaying contracted insurance providers",
			"Option to have an album from the doctor's profile image gallery",
			"Ability to reschedule and cancel appointments",
			"Patient access to the history of previous appointments and the ability to book a new appointment",
		],
	},
	{
		category: "Basic Features",
		color: "#000",
		items: [
			"Doctor's profile",
			"Online consultation",
			"Appointment booking for in-person consultation with a doctor, hospital, and clinic",
			"Support system",
			"Doctor's working schedule",
		],
	},
	{
		category: "Future Features",
		color: "#FF9500",
		items: [
			"Ability to register electronic prescriptions",
			"Online pharmaceutical consultation with a pharmacist",
			"24/7 support via chatbot",
			"Prioritizing patients who have been with the same doctor since the beginning of their treatment",
			"History of medical records and electronic prescriptions",
			"Recording the patient's treatment progress by the doctor",
			"Personalized treatment plan",
			"Appointment reminder system",
		],
	},
];

const StyledH4 = styled.h4`
	font-size: 24px;
	font-weight: 500;
	margin-bottom: 16px;
	margin-top: 48px;
	@media ${device.tablet} {
		font-size: 20px !important;
	}
`;

const StyledCards = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: start;
`;

const StyledCard = styled.div`
	background-color: #f1f5fd;
	border-radius: 40px;
	padding: 20px 26px;
	width: calc(100% - 48px);
`;

const CardTitle = styled.h5`
	font-size: 16px;
	font-weight: 500;
	width: fit-content;
	border-radius: 32px;
	background-color: #fff;
	padding: 4px 8px;
	color: ${(props) => props.textcolor};
	margin-bottom: 20px;
	@media ${device.tablet} {
		font-size: 14px !important;
	}
    @media ${device.mobile} {
		font-size: 12px !important;
	}
`;

const StyledList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: start;
	margin-left: 26px;
    @media ${device.mobile} {
		gap: 12px;
	}
`;

const StyledLi = styled.li`
	font-size: 16px;
	@media ${device.tablet} {
		font-size: 14px !important;
	}
    @media ${device.mobile} {
		font-size: 12px !important;
	}
`;

const Features = () => {
	return (
		<div>
			<StyledH4>And Others...</StyledH4>
			<StyledCards>
				{featuresData.map((featureCategory, index) => (
					<StyledCard key={index}>
						<CardTitle textcolor={featureCategory.color}>
							{featureCategory.category}
						</CardTitle>
						<StyledList>
							{featureCategory?.items?.map((item) => {
								return <StyledLi>{item}</StyledLi>;
							})}
						</StyledList>
					</StyledCard>
				))}
			</StyledCards>
		</div>
	);
};

export default Features;
