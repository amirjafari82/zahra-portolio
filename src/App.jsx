import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import CaseStudy from "./CaseStudies/CaseStudy";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/caseStudies/:caseStudy" element={<CaseStudy />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
