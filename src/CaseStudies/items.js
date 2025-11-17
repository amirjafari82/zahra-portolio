import AchareDesign from "./Achare/Design/AchareDesign";
import AchareResearch from "./Achare/Research/AchareResearch";
import Design from "./App100/Design/App100Design";
import App100Research from "./App100/Research/App100Research";
import JavidaanDesign from "./Javidaan/Design/JavidaanDesign";
import JavidaanOverView from "./Javidaan/ProjectOverView/JavidaanOverView";
import JavidaanResearch from "./Javidaan/Research/JavidaanResearch";
import JavidaanUsabilityTesting from "./Javidaan/UsabilityTesting/JavidaanUsabilityTesting";
import NabzDesign from "./Nabz/Design/NabzDesign";
import NabzResearch from "./Nabz/Research/NabzResearch";
import NabzUsabilityTesting from "./Nabz/UsabilityTesting/NabzUsabilityTesting";
import Clarity from "./tools/Clarity";
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
			textColor: "#000",
			role: "Product Designer",
			bgStyle: {
				background: "linear-gradient(90deg, #C4DAFF 0%, #EAF2FF 100%)",
			},
			tools: [Figma, Maze, PhotoShop, Meet],
			image: "../images/pageImages/Javidaan.png",
			imgHeight: "460px",
			imgdesktopLgMidRespWidth: "100%",
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
		usabilityTesting: JavidaanUsabilityTesting,
	},
	App100: {
		header: {
			title: "Designing an <strong>User-friendly Finance App</strong>",
			date: "2024",
			device: "Web",
			role: "Product Designer",
			textColor: "#fff",
			bgStyle: {
				background: "linear-gradient(269.83deg, #101CCF 0.14%, #0C1488 99.86%)",
			},
			tools: [Figma, PhotoShop, Meet],
			image: "../images/pageImages/100.png",
			imgHeight: "422px",
		},
		projectOverViewParag: `This is a digital banking app with innovative solutions for your financial managment.
			With our user-friendly interface and advanced security you can manage accounts,
			make transactions and access banking services anytime,anywhere.`,
		problem: `This project started from a request by stakeholders who wanted a banking and finance app that felt minimal,
		 simple, and highly functional—an app that makes managing finances 
		 easy straight-forward while delivering a smooth, modern user experience.`,
		research: App100Research,
		design: Design,
	},
	Nabz: {
		header: {
			title: "Designing a <strong>Doctor Appointment App</strong>",
			date: "2025",
			device: "Web",
			role: "Product Designer",
			textColor: "#fff",
			bgStyle: {
				background: "linear-gradient(269.86deg, #4159F1 0.12%, #3041AC 99.88%)",
			},
			tools: [Figma, Maze, Clarity, PhotoShop, Meet],
			image: "../images/pageImages/Nabz.png",
			imgHeight: "447px",
			imgTabletRespWidth: "60%",
		},
		projectOverViewParag: `Every person at least once in his life goes to a medical service center or a doctor's office for health problems. 
		This experience is a journey from the moment the patient feels the need for advice or specialized medical services to the initial 
		treatment of this first trip and step, finding the right doctor and booking an appointment. 
		At this stage, a group of patients may have serious concerns about trusting the doctor, 
		knowledge of related expertise, costs, route and distance, methods of receiving, services, 
		time coordination, and we know that patients at this stage are making efforts to solve their needs and probably had problems 
		in their current or past experiences.`,
		problem: `The stakeholders recognized a clear need at the outset of this project: 
		scheduling a doctor's appointment was frequently difficult, time-consuming, and frustrating, 
		particularly for senior citizens. The idea was to create an app that makes everything easier, 
		from scheduling an appointment to locating the best doctor, by providing a simple, 
		easy-to-use interface that saves time and lowers stress.`,
		research: NabzResearch,
		design: NabzDesign,
		usabilityTesting: NabzUsabilityTesting,
	},
	Achare: {
		header: {
			title: "Improving the <strong>service request process</strong>",
			date: "2025",
			device: "Web",
			role: "Product Designer",
			textColor: "#fff",
			bgStyle: {
				background: "linear-gradient(269.84deg, #05B49D 0.13%, #047365 99.87%)",
			},
			tools: [Figma, PhotoShop, Meet],
			image: "../images/pageImages/Achare.png",
			imgHeight: "444px",
		},
		projectOverViewParag: `Achare is an online platform that connects people with local service providers, helping users save time,
  		reduce costs, and make everyday life easier. The goal of this project was to increase user engagement on
  		the Achare website. Through the design process, we discovered that streamlining and speeding up the
  		service request flow could significantly improve the overall user experience — which became the main focus
  		of the redesign.`,
		problem: `The stakeholders recognized a clear need at the outset of this project: 
		scheduling a doctor's appointment was frequently difficult, 
		time-consuming, and frustrating, particularly for senior citizens. 
		The idea was to create an app that makes everything easier, 
		from scheduling an appointment to locating the best doctor, 
		by providing a simple, easy-to-use interface that saves time and lowers stress.`,
		research: AchareResearch,
		design: AchareDesign,
	},
};
