import React from "react";

const JavidaanCompetitorAnalysis = () => {
	return (
		<div style={{ marginTop: "56px" }}>
			<h4
				style={{
					fontSize: "24px",
					fontWeight: 500,
					marginBottom: "16px",
				}}
			>
				Competitor analysis
			</h4>
			<p>
				In the next step, I reviewed the existing Iranian competitors in the
				market to get more familiar with the{" "}
				<strong>SEO landscape and its tools.</strong> This also helped me form a
				clearer picture of what an SEO analyzer tool should offer. Below, you
				can see a list of the competitors I analyzed along with their features.
			</p>

			<div
				style={{
					backgroundColor: "#1E3C6E",
					width: "100%",
					textAlign: "center",
					paddingTop: "27px",
					borderRadius: "56px",
					overflow: "hidden",
					marginTop: "20px",
				}}
			>
				<div
					style={{
						position: "relative",
						display: "inline-block",
					}}
				>
					<img
						src="../images/pageImages/javidaanResearch.png"
						alt="Competitor Analysis"
						style={{
							width: "100%",
							display: "block",
							maskImage:
								"linear-gradient(to bottom, black 70%, transparent 100%)",
							WebkitMaskImage:
								"linear-gradient(to bottom, black 70%, transparent 100%)",
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default JavidaanCompetitorAnalysis;
