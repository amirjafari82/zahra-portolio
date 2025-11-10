import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
	background-color: #1e3c6e;
	border-radius: 56px;
	display: flex;
	gap: 21px;
	padding: 0px 40px;
    margin-top: 16px;
    width: 70%;
    margin-right: auto;
    margin-left: auto;
`;

const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
	gap: 83px;
	justify-content: center;
	align-items: center;
`;

const Image = styled.img``;

const RightSide = styled.div`
	display: flex;
	flex-direction: column;
	gap: 43px;
	align-items: center;
	justify-content: center;
`;

const StyledItem = styled.div`
	background-color: #fefefe;
	border-radius: 48px;
	padding: 20px;
`;

const Dashboard = () => {
	return (
		<div>
			<h4
				style={{
					fontWeight: 600,
					fontSize: "24px",
					marginBottom: "8px",
					marginTop: "120px",
				}}
			>
				Dashboard
			</h4>
			<p>
				The Javidan Dashboard was designed to give SEO specialists a clear,
				instant overview of their project’s performance. It focuses on
				simplicity and usability — showing key metrics like keyword rankings,
				competitor data, and page status at a glance. With clean visuals and a
				calm design, it helps users quickly spot trends and make data-driven
				decisions without feeling overwhelmed.
			</p>
			<StyledCard>
				<LeftSide>
					<StyledItem>
						For displaying Javidan’s data, we focused on using tables wherever
						possible so that the information could be absorbed more quickly and
						clearly.
					</StyledItem>
					<StyledItem>
						It shows how many keywords fall into each ranking range charts. It’s
						useful because it quickly reveals how many keywords are in top
						positions — and where there’s room for improvement.
					</StyledItem>
				</LeftSide>
				<Image
					src="../../../images/pageImages/JavidaanDashboard.png"
					width={334}
					height={589}
					style={{
						margin: "90px 0px 40px 0px",
					}}
				/>
				<RightSide>
					<StyledItem>
						In the page review section, I used donut charts to make the data
						easier to grasp. Alongside the charts, the information was designed
						in a way that clearly indicated it was clickable, with each item
						leading to a separate page for more detailed insights.
					</StyledItem>
					<StyledItem>
						I used different colors in the keyword ranking distribution chart to
						make data ranges easier to distinguish. Each color shows a ranking
						group, and users can hover to view detailed info for a clearer, more
						interactive experience.
					</StyledItem>
				</RightSide>
			</StyledCard>
		</div>
	);
};

export default Dashboard;
