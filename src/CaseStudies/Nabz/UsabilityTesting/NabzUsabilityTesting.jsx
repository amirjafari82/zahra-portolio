import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";
import BeforeAfterItems from "./BeforeAfterItems";

const StyledP1 = styled.p`
	font-size: 16px;
	margin-bottom: 36px;
	@media ${device.tablet} {
		font-size: 14px !important;
	}
`;

const Image = styled.img`
	width: 992px;
	@media ${device.laptop} {
		width: 100%;
	}
`;

const FinalImages = styled.div`
	margin-top: 42px;
`;

const FinalImage = styled.img`
    width: 100%;
    margin-top: -8px;
`;

const NabzUsabilityTesting = () => {
	return (
		<div>
			<StyledP1>
				We evaluated the UI design of Nabz using Jakob Nielsen’s 10 usability
				heuristics. The test was conducted with 6 participants through Maze to
				assess how well the design aligns with usability principles. The results
				gave us some valuable and interesting insights. After identifying the
				users’ pain points, we applied several changes to improve the UI design
				of Nabz.
			</StyledP1>
			<Image src="../images/pageImages/Nabz/UsabilityTesting/UsabilityTesting.png" />
			<BeforeAfterItems />
			<FinalImages>
				{Array.from({ length: 3 }, (_, i) => i + 1).map((img) => {
					return (
						<FinalImage src={`../images/pageImages/Nabz/Final${img}.png`} />
					);
				})}
			</FinalImages>
		</div>
	);
};

export default NabzUsabilityTesting;
