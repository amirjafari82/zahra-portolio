import JavidaanDesign from "./Javidaan/Design/JavidaanDesign";
import JavidaanOverView from "./Javidaan/ProjectOverView/JavidaanOverView";
import JavidaanResearch from "./Javidaan/Research/JavidaanResearch";
import Figma from "./tools/Figma";
import Maze from "./tools/Maze";
import Meet from "./tools/Meet";
import PhotoShop from "./tools/PhotoShop";

export const caseItems = {
	Javidaan: {
		header: {
			title: "Designing an <strong>SEO Analyzer Dashboard</strong>",
			date: "2025",
			device: "Web",
			role: "Product Designer",
			bgStyle: {
				background: "linear-gradient(90deg, #C4DAFF 0%, #EAF2FF 100%)",
			},
			tools: [Figma, Maze, PhotoShop, Meet],
			image: "../images/pageImages/Javidaan.png",
			imgHeight: "460px",
			imageStyle: {
				marginLeft: "-100px",
			},
		},
		projectOverViewComp: JavidaanOverView,
		problem: `SEO specialists deal with tons of data every day,
			jumping between different tools to make sense of it all.
			The goal was to bring everything together in one clear, easy-to-use dashboard.
			Because both experts and clients interact with it daily,
			it needed to be smooth, simple, and efficient — but still powerful enough to handle complex insights.`,
		research: JavidaanResearch,
		design: JavidaanDesign,
	},
	App100: {
		header: {
			title: "Designing an <strong>User-friendly Finance App</strong>",
			date: "2024",
			device: "Web",
			role: "Product Designer",
			bgColor: "#E4E4FFC9",
			tools: [Figma, Maze, PhotoShop, Meet],
			image: "../images/pageImages/100.png",
			imgHeight: "422px",
			// imageStyle: {
			// 	marginLeft: "-100px",
			// },
		},
	},
	Nabz: {
		header: {
			title: "Designing a Doctor Appointment App ",
			date: "2025",
			device: "Web",
			role: "Product Designer",
			bgColor: "#F5F8FD",
			tools: [Figma, Maze, PhotoShop, Meet],
			image: "../images/pageImages/Nabz.png",
			imgHeight: "447px",
		},
	},
	Achare: {
		header: {
			title: "Redesigning a service app",
			date: "2025",
			device: "Web",
			role: "Product Designer",
			bgColor: "#F7F7F7",
			tools: [Figma, Maze, PhotoShop, Meet],
			image: "../images/pageImages/Achare.png",
			imgHeight: "444px",
		},
	},
};
