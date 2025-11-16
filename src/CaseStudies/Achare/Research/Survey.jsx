import React from "react";
import styled from "styled-components";

const StyledMain = styled.div`
	margin-top: 60px;
`;

const StyledH4 = styled.h4`
	font-size: 24px;
	font-weight: 500;
	margin-bottom: 8px;
	@media ${device.tablet} {
		font-size: 20px !important;
	}
`;

const StyledP1 = styled.p`
	font-size: 20px;
	margin-bottom: 24px;
	@media ${device.tablet} {
		font-size: 16px !important;
	}
`;

const Survey = (props) => {
	return (
		<StyledMain>
			<StyledH4>Survey</StyledH4>
			<StyledP1>
				To better analyze user challenges, we designed a questionnaire. To
				gather a wider range of insights, we shared it with people who had
				experience using service apps, including Achareh.
				<br />
				You can see some of the survey questions and the users’ charted
				responses, which gave us a clearer understanding of the existing
				challenges.
			</StyledP1>
		</StyledMain>
	);
};

export default Survey;
