import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";
import Medic from "../../../assets/icons/Medic";
import AffinityDiagramItem from "./AffinityDiagramItem";

const items = [
	{
		title: "In-person visit",
		icon: Medic,
		sections: [
			{
				title: "Challenges",
				options: [
					"Loss of documents and files",
					"Crowded clinics",
					"Shortage of specialists in certain fields",
					"Long waiting times without considering the patient's difficult condition",
					"Long distances",
				],
			},
			{
				title: "Open ideas",
				options: [
					"Maintaining and organizing each patient's medical records in their own profile",
					"Separate scheduling on different days for patients with more critical conditions or adding a location filter when selecting a doctor",
					"Assigning specific and varied time slots",
					"Indicating the average waiting time based on the high number of appointments for each day and each doctor",
					"Discrepancy between doctors in reality and online",
				],
			},
			{
				title: "Needs",
				options: [
					"Secure storage of files and documents",
					"Proper and punctual scheduling",
					"Building more trust in online reviews",
					"Proximity of the treatment location to the patient",
				],
			},
			{
				title: "Value propositions",
				options: [
					"Easy access to medical information",
					"Ease of finding the nearest location for treatment",
					"Building more trust in online reviews",
					"Creating priority for emergency patients",
					"Better scheduling, transparency of information, easy access, and personalized services",
				],
			},
		],
	},
	{
		title: "Suitable Doctor",
		icon: Medic,
		sections: [
			{
				title: "Challenges",
				options: [
					"Mismatch between doctors’ real performance and their online profiles",
					"Difficulty choosing a doctor due to too many differing attributes",
					"Lack of full trust in online ratings",
					"Doctors not spending enough time listening to patients during visits",
					"Shortage of specialists in certain medical fields",
				],
			},
			{
				title: "Open ideas",
				options: [
					"Providing access to other patients’ reviews",
					"Displaying a complete list of specialist doctors on the app’s homepage",
					"Showing more detailed doctor profiles, such as published research or articles",
					"Allowing users to react (like/dislike) to other patients’ comments",
					"Rating and ranking doctors based on various factors",
					"Offering advanced filters to remove irrelevant options",
				],
			},
			{
				title: "Needs",
				options: [
					"A reliable and trustworthy source for comparing and choosing doctors",
					"Confidence in online ratings",
					"Access to qualified specialists",
					"Better guidance to help users easily find the right doctor",
					"The need to be heard during appointments",
				],
			},
			{
				title: "Value propositions",
				options: [
					"Increasing user trust and presenting a more professional image",
					"Making experiences more transparent to help users make better decisions",
					"Improving accessibility to specialists’ information",
					"Helping users manage their time more efficiently",
				],
			},
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

const StyledItems = styled.div`
	display: flex;
	gap: 32px;
	flex-direction: column;
	justify-content: center;
`;

const AffinityDiagram = () => {
	return (
		<div>
			<StyledH4>Affinity diagram</StyledH4>
			<StyledItems>
				{items.map((item, index) => {
					return <AffinityDiagramItem {...{ item }} key={index} />;
				})}
			</StyledItems>
		</div>
	);
};

export default AffinityDiagram;
