import React from "react";
import { IconContext } from "react-icons";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

const StyledScrollToTop = styled.div`
	position: fixed;
	right: 20px;
	bottom: 20px;
	background-color: #fff;
	border-radius: 100%;
	border: 1px solid #d8d8d8;
	display: ${(props) => (props.showScroll ? "flex" : "none")};
	justify-content: center;
	align-items: center;
	padding: 20px;
	cursor: pointer;
`;

const ScrollToTop = ({ showScroll, setShowScroll }) => {
	return (
		<StyledScrollToTop
			showScroll={showScroll}
			onClick={() => {
				const app = document.getElementById("main");
				app.scrollIntoView({ behavior: "smooth", block: "start" });
				setShowScroll(false);
			}}
		>
			<IconContext.Provider
				value={{ size: "24px", className: "global-class-name" }}
			>
				<FaArrowUp />
			</IconContext.Provider>
		</StyledScrollToTop>
	);
};

export default ScrollToTop;
