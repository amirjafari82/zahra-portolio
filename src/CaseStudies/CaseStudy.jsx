import React from "react";
import { useParams } from "react-router-dom";
import { caseItems } from "./items";
import styled from "styled-components";

const StyledCaseStudy = styled.div`
	margin: 124px 160px;
`;

const Header = styled.div`
	background-color: ${(props) => props.bgColor};
	padding: 24px 36px;
	border-radius: 56px;
	display: flex;
	justify-content: space-between;
`;

const HeaderInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	flex-basis: 70%;
`;

const Title = styled.p`
	font-size: 48px;
	font-weight: 400;
	margin-bottom: 60px;
`;

const Date = styled.p`
	font-size: 20px;
`;

const Device = styled.p`
	font-size: 20px;
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
`;

const RoleTitle = styled.span`
	font-size: 20px;
`;

const RoleSubject = styled.span`
	font-weight: 600;
	font-size: 20px;
`;

const Divider = styled.div`
	width: 1px;
	height: 48px;
	background-color: #c4c1c1;
	margin: -8px 8px;
`;

const Tools = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
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
`;

const HeaderImage = styled.img``;

const CaseStudy = () => {
	const { caseStudy } = useParams();

	const curruntPage = caseItems[caseStudy];

	console.log(curruntPage);

	return (
		<StyledCaseStudy>
			<Header bgColor={curruntPage.header.bgColor}>
				<HeaderInfo>
					<Title
						dangerouslySetInnerHTML={{ __html: curruntPage.header.title }}
					/>
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
							{curruntPage.header.tools?.map((Tool) => (
								<Tool />
							))}
						</ToolsItems>
					</Tools>
				</HeaderInfo>
				<HeaderImage
					src={curruntPage.header.image}
					width={curruntPage.header.imgWidth}
					height={curruntPage.header.imgHeight}
					style={{
						...curruntPage.header.imageStyle,
					}}
				/>
			</Header>
		</StyledCaseStudy>
	);
};

export default CaseStudy;
