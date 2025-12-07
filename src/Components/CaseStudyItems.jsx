import React from "react";
import styled from "styled-components";
import CaseStudyItem from "./CaseStudyItem";
import { device } from "../styles/breakpoints";

const items = [
	{
		image: "./images/SEO_Analyzer.png",
		title: "Designing a SEO Analyzer Dashboard",
		desc: "An intuitive SEO dashboard that turns complex data into clear insights, helping specialists track performance and make smarter, faster decisions.",
		link: "Javidaan",
	},
	{
		image: "./images/Finance.png",
		title: "Designing a User-friendly Finance App",
		desc: "A smart banking app that helps you manage your money effortlessly — secure, simple, and always within reach.",
		link: "App100",
	},
	{
		image: "./images/Appointment.png",
		title: "Designing a Doctor Appointment App",
		desc: "An easy, stress-free way to book doctor appointments, keep track of your records, and stay in touch with your doctor.",
		link: "Nabz",
	},
	{
		image: "./images/Redesign.png",
		title: "Improving the service request process",
		desc: "Redesigned Achare’s service flow to make booking faster and simpler, aiming to boost user engagement and create a smoother, more efficient experience.",
		link: "Achare",
	},
];

const StyledCaseStudyItems = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	gap: 28px;
	align-items: stretch;
	@media ${device.laptop} {
		flex-direction: column;
	}
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
