import React from "react";
import styled from "styled-components";
import InterviewItem from "./InterviewItem";
import { device } from "../../../styles/breakpoints";

const items = [
	{
		title: "Choosing a doctor",
		description:
			"People seek doctor recommendations from acquaintances first, then turn to online searches, booking websites, and social media. Key factors include referrals, reviews, specialization, experience, demeanor, and accessibility. Common issues involve crowded clinics, booking difficulties, limited interaction, and unavailable medications. While some prefer phone bookings, many use online platforms. The final decision combines personal referrals and online research.",
	},
	{
		title: "Diagnosis by symptoms",
		description:
			"People find doctors through online searches or referrals. General practitioners diagnose and refer, but some prefer specialists directly. Common illnesses are self-treated or handled by doctors, while unclear symptoms need further checks. Cost and insurance impact choices—some see GPs to save money, while others go to specialists due to lack of coverage. Silent diseases require thorough exams for detection.",
	},
	{
		title: "Doctor's appointments",
		description:
			"Patients struggle with booking, long waits, high costs, and poor insurance. Doctor behavior affects satisfaction, while clinic accessibility and work hours matter. Online consultations help, but in-person visits remain essential. Skilled doctors are in high demand, limiting patient interaction.",
	},
	{
		title: "Experience with online methods",
		description:
			"Patients face booking difficulties, long waits, high costs, and poor insurance. Doctor behavior, clinic accessibility, and work hours impact satisfaction. Online consultations help, but in-person visits remain essential. Skilled doctors are often overcrowded, reducing patient interaction.",
	},
	{
		title: "Difficulties with online experience",
		description:
			"Online booking is fast but challenging. Doctor selection is hard due to unreliable ratings. Technical issues, payment problems, and cancellations cause frustration. Elderly patients struggle, and data security is a concern.",
	},
];

const StyledMain = styled.div`
	background-color: #f8f6f6;
	border-radius: 56px;
	padding: 32px 0px;
	display: flex;
	overflow: hidden;
	flex-direction: column;
	gap: 12px;
	justify-content: start;
	align-items: center;
`;

const InterviewItems = () => {
	return (
		<StyledMain
			style={{
				width: "100%",
				maskImage: "linear-gradient(black 60%, transparent 101%)",
				WebkitMaskImage: "linear-gradient(black 60%, transparent 101%)",
			}}
		>
			{items?.map((item, index) => {
				return <InterviewItem {...{ item }} key={index} />;
			})}
		</StyledMain>
	);
};

export default InterviewItems;
