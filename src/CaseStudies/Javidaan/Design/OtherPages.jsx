import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
	border: 1px solid #dadada;
	border-radius: 56px;
	width: 100%;
    overflow: hidden;
`;

const StyledImage = styled.img`
	width: 100%;
`;

const OtherPages = () => {
	return (
		<div>
			<h4
				style={{
					fontWeight: 600,
					fontSize: "24px",
					marginBottom: "16px",
					marginTop: "56px",
				}}
			>
				And many other pages...
			</h4>
			<StyledCard>
				<StyledImage src="../../../images/pageImages/JavidaanOther.png" />
			</StyledCard>
		</div>
	);
};

export default OtherPages;
