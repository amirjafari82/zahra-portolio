import React from "react";
import styled from "styled-components";
import CaseStudyItem from "./CaseStudyItem";

const items = [
	{
		image: "./images/SEO_Analyzer.png",
		title: "Designing an SEO Analyzer Dashboard",
		desc: "An intuitive SEO dashboard that turns complex data into clear insights, helping specialists track performance and make smarter, faster decisions.",
		link: "",
	},
	{
		image: "./images/Finance.png",
		title: "Designing an User-friendly Finance App",
		desc: "A smart banking app that helps you manage your money effortlessly — secure, simple, and always within reach.",
		link: "",
	},
	{
		image: "./images/Appointment.png",
		title: "Designing a Doctor Appointment App",
		desc: "An easy, stress-free way to book doctor appointments, keep track of your records, and stay in touch with your doctor.",
		link: "",
	},
	{
		image: "./images/Redesign.png",
		title: "Redesigning a service app",
		desc: "A handy app that helps you book doctor appointments, manage your records, and easily stay in touch with your doctor.",
		link: "",
	},
];

const StyledCaseStudyItems = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	gap: 32px;
	align-items: center;
`;

const CaseStudyItems = () => {
	return (
		<StyledCaseStudyItems>
			{items.map((caseStudy, index) => (
				<CaseStudyItem key={index} {...{ caseStudy }} />
			))}
		</StyledCaseStudyItems>
	);
};

export default CaseStudyItems;
