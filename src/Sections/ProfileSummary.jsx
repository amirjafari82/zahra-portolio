import React from "react";
import styled from "styled-components";
import MyExperience from "../Components/MyExperience";
import Skills from "../Components/Skills";
import Tools from "../Components/Tools";
import ContactMe from "../Components/ContactMe";
import { device } from "../styles/breakpoints";

const StyledProfileSummary = styled.div`
	margin-top: 94px;
	display: flex;
	flex-direction: column;
	gap: 40px;
`;

const Sec = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	gap: 24px;
	@media ${device.laptop} {
		flex-direction: column;
	}
`;

const ProfileSummary = () => {
	return (
		<StyledProfileSummary id="profile_summary">
			<Sec>
				<MyExperience />
				<Skills />
			</Sec>
			<Sec>
				<Tools />
				<ContactMe />
			</Sec>
		</StyledProfileSummary>
	);
};

export default ProfileSummary;
