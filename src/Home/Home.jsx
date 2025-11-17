import React, { useEffect, useState } from "react";
import Header from "../Sections/Header";
import styled from "styled-components";
import HeroSection from "../Sections/HeroSection";
import LastProjects from "../Sections/LastProjects";
import CaseStudies from "../Sections/CaseStudies";
import ProfileSummary from "../Sections/ProfileSummary";
import AboutMe from "../Sections/AboutMe";
import ScrollToTop from "../Components/ScrollToTop";
import { device } from "../styles/breakpoints";
import ScrollDefault from "../Components/ScrollDefault";

const Main = styled.div`
	padding: 32px 160px;
	background-color: #f7f8f9;
	@media ${device.desktopLg} {
		padding: 44px 16px;
	}
`;

const Home = () => {
	const [showScroll, setShowScroll] = useState(false);
	return (
		<Main id="main">
			<ScrollDefault />
			<Header {...{ setShowScroll }} />
			<HeroSection />
			<LastProjects />
			<CaseStudies />
			<ProfileSummary />
			<AboutMe />
			<ScrollToTop {...{ showScroll, setShowScroll }} />
		</Main>
	);
};

export default Home;
