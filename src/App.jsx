import "./App.css";
import Header from "./Header";
import styled from "styled-components";
import HeroSection from "./Sections/HeroSection";
import LastProjects from "./Sections/LastProjects";
import CaseStudies from "./Sections/CaseStudies";
import ProfileSummary from "./Sections/ProfileSummary";

const Main = styled.div`
	padding: 32px 160px;
	background-color: #f7f8f9;
`;

function App() {
	return (
		<Main>
			<Header />
			<HeroSection />
			<LastProjects />
			<CaseStudies />
			<ProfileSummary />
		</Main>
	);
}

export default App;
