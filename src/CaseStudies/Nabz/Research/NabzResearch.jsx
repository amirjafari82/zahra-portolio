import React from "react";
import Interview from "./Interview";
import Surveys from "./Surveys";
import AffinityDiagram from "./AffinityDiagram";
import ResearchOthers from "./ResearchOthers";
import Features from "./Features";
import MapFlow from "./MapFlow";

const NabzResearch = () => {
	return (
		<div>
			<Interview />
			<Surveys />
			<AffinityDiagram />
			<ResearchOthers />
			<Features />
            <MapFlow />
		</div>
	);
};

export default NabzResearch;
