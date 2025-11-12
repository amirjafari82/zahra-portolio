import React from "react";
import styled from "styled-components";
import Register from "../../../assets/icons/Register";
import { device } from "../../../styles/breakpoints";

const roleItems = [
	{
		text: "Working with SEO and development teams in order to ensure the design meets analytical and technical requirements.",
	},
	{
		text: "Wireframing, user flows, and prototypes exist to present complex data sets.",
	},
	{
		text: "Test usability, and incorporate feedback to improve the user experience.",
	},
	{
		text: "Maintain information's visual hierarchy in the dashboard.",
	},
	{
		text: "It continues to be improved with additional data visualization, filtering, and user experience features.",
		style: "bold",
	},
];

const StyledP1 = styled.p`
	font-size: 24px;
	font-weight: 400;
	@media ${device.tablet} {
		font-size: 16px !important;
	}
`;

const StyledH5 = styled.h5`
	font-size: 24px;
	font-weight: 500;
	margin-top: 20px;
	margin-bottom: 16px;
	@media ${device.tablet} {
		font-size: 20px !important;
	}
`;

const StyledP2 = styled.p`
	font-size: 20px;
	font-weight: 400;
	@media ${device.tablet} {
		font-size: 16px !important;
	}
`;

const StyledRoles = styled.div`
	margin-top: 16px;
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const StyledRole = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
	@media ${device.tablet} {
		> p {
			font-size: 14px !important;
		}
		> svg {
			width: 16px !important;
		}
	}
`;

const JavidaanOverView = () => {
	return (
		<div>
			<StyledP1>
				The Javidan SEO Analyzer Dashboard is a key product at Amina Group,
				built to help SEO teams track performance, spot keyword trends, and turn
				data into clear insights. I’m still actively working on it — adding new
				features and improving the experience together with the SEO and dev
				teams.
			</StyledP1>
			<StyledH5>My role</StyledH5>
			<StyledP2>
				As a Product Designer, I designed projects through the entire design
				process from conceiving to implementing to iterating. My
				responsibilities include:
			</StyledP2>
			<StyledRoles>
				{roleItems?.map((item) => {
					return (
						<StyledRole>
							<Register />
							<p
								style={{
									fontSize: "18px",
									fontWeight: item?.style == "bold" ? 600 : 400,
								}}
							>
								{item?.text}
							</p>
						</StyledRole>
					);
				})}
			</StyledRoles>
		</div>
	);
};

export default JavidaanOverView;
