import React from "react";
import styled from "styled-components";
import Cancle from "../../../assets/icons/Cancle";
import Confirm from "../../../assets/icons/Confirm";
import BeforeAfterIcon from "../../../assets/icons/BeforeAfterIcon";
import { device } from "../../../styles/breakpoints";

const StyledMain = styled.div`
	margin-top: 64px;
	display: flex;
	flex-direction: column;
	gap: 58px;
    @media ${device.tablet} {
		gap: 32px;
	}
`;

const StyledItem = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #f8f6f6;
	padding: 40px;
	border-radius: 56px;
	position: relative;
	@media ${device.tablet} {
		flex-direction: column;
	}

    @media ${device.mobile} {
		padding: 24px;
	}
`;

const Left = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	justify-content: start;
	align-items: start;
	flex-basis: 45%;
	@media ${device.laptop} {
		flex-basis: 50%;
	}
`;

const Right = styled.div`
	display: flex;
	gap: 32px;
	align-items: center;
	justify-content: space-between;
	@media ${device.laptop} {
		flex-basis: 50%;
	}

	@media ${device.tablet} {
        gap: 16px;
        margin-top: 16px;
	}
`;

const Title = styled.h4`
	font-size: 24px;
	font-weight: 500;
    @media ${device.tablet} {
		font-size: 18px;
	}
`;

const P1 = styled.p`
	@media ${device.mobile} {
		font-size: 12px;
	}
`;

const ImgSec = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	justify-content: center;
	align-items: center;
    @media ${device.tablet} {
        gap: 0px;
	}
`;

const Image = styled.img`
	width: 100%;
	z-index: 10;
`;

const ImageTitleSec = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 6px;
`;

const ImageTitle = styled.span`
	font-size: 18px;
	font-weight: 500;
    @media ${device.tablet} {
        font-size: 14px;
	}
`;

const StyledIcon = styled.div`
	position: absolute;
	left: 0;
	bottom: -6px;
	z-index: 1;
	@media ${device.desktopLg} {
		> svg {
			width: 200px;
			height: 200px;
		}
	}
`;
const items = [
	{
		title: "Home Page",
		desc: `One main usability issue we discovered on the homepage was related
				to how users interacted with content cards. Instead of clicking on
				the specific action buttons placed on the cards many users clicked
				on the entire card. This behavior indicated that our buttons weren’t
				clearly perceived as the primary action. To fix this, we redesigned
				the buttons using a fill color style and higher contrast.`,
		baseImg: "Home",
	},
	{
		title: "DR List Page",
		desc: `Another issue we noticed was that some tags on doctor cards
				(like in the doctor list) were mistaken for buttons. To fix
				this, we changed their color and removed the filled style so
				they wouldn’t be confused with actionable elements. Also,
				similar to a previous case, users often clicked on the entire
				card instead of the actual button. So, we redesigned the buttons
				to be full-width to guide the user more clearly toward the
				intended action`,
		baseImg: "DrList",
	},
	{
		title: "DR Profile",
		desc: `In the doctor profile page, users struggled to recognize the radio
			    buttons used to select the type of visit_whether in-person, phone,
			    or video. The floating action button for booking wasn’t intuitive
			    either, which led users to click directly on the entire visit
			    cards instead. To solve this, we redesigned the interaction:
			    instead of relying on a single floating button and radio buttons,
			    we added a separate “Book Appointment” button to each visit card.
			    This made the options more clear.`,
		baseImg: "DRProfile",
	},
	{
		title: "Reservation Flow",
		desc: `During the appointment booking flow, we noticed that users had
			    trouble finding their previously created patient files. When
			    they couldn’t locate their file, they tried to create a new
			    one_but the option to do so wasn’t clearly distinguishable,
			    which led to confusion and hesitation. To improve clarity, we
			    redesigned the interface by visually separating the “Create New
			    File” action from the list of existing files. We converted it
			    into a text-style button, making it feel like a secondary action
			    and easier to spot without blending in with the other selectable
			    options`,
		baseImg: "Reservation",
	},
];

const BeforeAfterItems = () => {
	return (
		<StyledMain>
			{items.map((item) => {
				return (
					<StyledItem>
						<Left>
							<Title>{item.title}</Title>
							<P1>{item.desc}</P1>
							<></>
						</Left>
						<Right>
							<ImgSec>
								<ImageTitleSec>
									<ImageTitle>Before</ImageTitle>
									<Cancle />
								</ImageTitleSec>
								<Image
									src={`../images/pageImages/Nabz/BeforeAfter/${item.baseImg}/Before.png`}
								/>
							</ImgSec>
							<ImgSec>
								<ImageTitleSec>
									<ImageTitle>After</ImageTitle>
									<Confirm />
								</ImageTitleSec>
								<Image
									src={`../images/pageImages/Nabz/BeforeAfter/${item.baseImg}/After.png`}
								/>
							</ImgSec>
						</Right>
						<StyledIcon>
							<BeforeAfterIcon />
						</StyledIcon>
					</StyledItem>
				);
			})}
		</StyledMain>
	);
};

export default BeforeAfterItems;
