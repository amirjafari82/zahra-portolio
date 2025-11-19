import * as React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  width: 200px;
  height: 1px;
  @media (max-width: 714px) {
    width: 100px;
  }
  @media (max-width: 600px) {
    width: 50px;
  }
`;

const Dashed = (props) => (
	<StyledSvg
		viewBox="0 0 336 1"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M0 0.5H336" stroke="#C2C2C2" strokeDasharray="13 13" />
	</StyledSvg>
);
export default Dashed;
