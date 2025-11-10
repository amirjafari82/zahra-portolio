import React from "react";
import styled from "styled-components";
import Register from "../../../assets/icons/Register";

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
`;

const JavidaanOverView = () => {
	return (
		<div>
			<p
				style={{
					fontSize: "24px",
					fontWeight: 400,
				}}
			>
				The Javidan SEO Analyzer Dashboard is a key product at Amina Group,
				built to help SEO teams track performance, spot keyword trends, and turn
				data into clear insights. I’m still actively working on it — adding new
				features and improving the experience together with the SEO and dev
				teams.
			</p>
			<h5
				style={{
					fontSize: "24px",
					fontWeight: 500,
					marginTop: "20px",
					marginBottom: "16px",
				}}
			>
				My role
			</h5>
			<p
				style={{
					fontSize: "20px",
					fontWeight: 400,
				}}
			>
				As a Product Designer, I designed projects through the entire design
				process from conceiving to implementing to iterating. My
				responsibilities include:
			</p>
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
