import React from "react";
import styled from "styled-components";

const StyledTools = styled.div`
	background-color: #fff;
	border-radius: 56px;
	border: 1px solid #DADADA;
	padding: 40px;
	flex-basis: 60%;
`;

const StyledHeader = styled.h4`
	font-size: 32px;
	font-weight: 600;
	margin-bottom: 48px;
`;

const Images = styled.div`
	margin-top: -70px;
	display: flex;
	flex-direction: column;
	gap: 40px;
`;

const One = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Multiple = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 56px;
`;

const Logo = styled.img`
`;

const Tools = () => {
	return (
		<StyledTools>
			<StyledHeader>Tools</StyledHeader>
			<Images>
				<One>
					<Logo src="./images/Figma.png" width={80} height={80} />
				</One>
				<Multiple>
					<Logo
						src="./images/IDK.jpg"
						style={{ borderRadius: "16px" }}
						width={80}
						height={80}
					/>
					<Logo src="./images/Illustrator.png" width={90} height={90} />
					<Logo src="./images/PhotoShop.png" width={80} height={80} />
				</Multiple>
				<One>
					<Logo
						src="./images/Clarity.png"
						width={70}
						height={70}
						style={{
							borderRadius: "16px",
							border: "1px solid #C2C2C2",
							padding: "8px 8px",
						}}
					/>
				</One>
			</Images>
		</StyledTools>
	);
};

export default Tools;
