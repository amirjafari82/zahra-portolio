import React from "react";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

const StyledHeader = styled.div`
	background-color: ${(props) => props?.bgColor};
	padding: 24px 36px;
	border-radius: 56px;
	display: flex;
	color: ${(props) => props?.textcolor};
	justify-content: space-between;
	@media ${device.desktopLgMid} {
		flex-direction: column-reverse;
	}
`;

const HeaderInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	flex-basis: 70%;
	@media ${device.tablet} {
		gap: 12px;
		flex-basis: 100%;
		margin-top: 16px;
	}
`;

const Title = styled.p`
	font-size: 48px;
	font-weight: 400;
	margin-bottom: 60px;
	@media ${device.tablet} {
		font-size: 24px;
		margin-bottom: 24px;
	}
`;

const Date = styled.p`
	font-size: 20px;
	@media ${device.tablet} {
		font-size: 14px;
	}
`;

const Device = styled.p`
	font-size: 20px;
	@media ${device.tablet} {
		font-size: 14px;
	}
`;

const Role = styled.div`
	border: 1px solid #c2c2c2;
	border-radius: 56px;
	width: fit-content;
	padding: 8px;
	margin-left: -8px;
	display: flex;
	align-items: center;
	gap: 8px;
	@media ${device.tablet} {
		padding: 4px;
	}
`;

const RoleTitle = styled.span`
	font-size: 20px;
	@media ${device.tablet} {
		font-size: 14px;
	}
`;

const RoleSubject = styled.span`
	font-weight: 600;
	font-size: 20px;
	@media ${device.tablet} {
		font-size: 14px;
	}
`;

const Divider = styled.div`
	width: 1px;
	height: 48px;
	background-color: #c4c1c1;
	margin: -8px 8px;
	@media ${device.tablet} {
		margin: -8px 2px;
		height: 30px;
	}
`;

const Tools = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	@media ${device.tablet} {
		> p {
			font-size: 14px !important;
		}
	}
`;

const ToolsItems = styled.div`
	display: flex;
	gap: 12px;
	align-items: center;
	justify-content: center;
	border: 1px solid #d1cfcb;
	border-radius: 56px;
	width: fit-content;
	padding: 4px 12px;
	@media ${device.tablet} {
		> svg {
			width: 48px !important;
		}
		align-items: center;
		justify-content: start;
		flex-wrap: wrap;
	}
`;

const HeaderImage = styled.img`
	@media ${device.desktopLgMid} {
		width: ${(props) => props?.imgdesktopLgMidRespWidth || "40%"};
		height: 40%;
		margin: 0 auto !important;
	}
	@media ${device.tablet} {
		width: ${(props) => props?.imgtabletrespwidth || "100%"};
		height: 100%;
	}
`;

const Header = ({ curruntPage }) => {
	return (
		<StyledHeader
			bgColor={curruntPage.header.bgColor}
			textcolor={curruntPage.header.textColor}
			style={{
				...curruntPage.header.bgStyle,
			}}
		>
			<HeaderInfo>
				<Title dangerouslySetInnerHTML={{ __html: curruntPage.header.title }} />
				<Date>Case Study-{curruntPage.header.date}</Date>
				<Device>
					Device{" "}
					<strong style={{ marginLeft: "20px" }}>
						{curruntPage.header.device}
					</strong>
				</Device>
				<Role>
					<RoleTitle>Role</RoleTitle>
					<Divider />
					<RoleSubject>{curruntPage.header.role}</RoleSubject>
				</Role>
				<Tools>
					<p style={{ fontSize: "18px" }}>The tools we used: </p>
					<ToolsItems>
						{curruntPage.header.tools?.map((Tool, index) => (
							<Tool key={index} />
						))}
					</ToolsItems>
				</Tools>
			</HeaderInfo>
			<HeaderImage
				src={curruntPage.header.image}
				width={curruntPage.header.imgWidth}
				height={curruntPage.header.imgHeight}
				imgtabletrespwidth={curruntPage.header.imgTabletRespWidth}
				imgdesktopLgMidRespWidth={curruntPage.header.imgdesktopLgMidRespWidth}
				style={{
					...curruntPage.header.imageStyle,
				}}
			/>
		</StyledHeader>
	);
};

export default Header;
