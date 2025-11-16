import React, { useEffect, useState, useRef } from "react";
import { styled } from "styled-components";
import { device } from "../styles/breakpoints";

const images = [
	{ badge: "3D Market", image: "../images/Carousel/3DMarket.png" },
	{ badge: "Pontiel", image: "../images/Carousel/Pontiel.png" },
	{ badge: "Eyvan-Sabz", image: "../images/Carousel/Eyvan-Sabz.png" },
	{ badge: "Masir-Bartar", image: "../images/Carousel/Masir-Bartar.png" },
	{ badge: "Lotus Website", image: "../images/Carousel/LotusWebsite.png" },
	{
		badge: "Litho-GraphyBasir",
		image: "../images/Carousel/Litho-GraphyBasir.png",
	},
];

const StyledCarousel = styled.div`
	display: flex;
	gap: 32px;
	overflow: hidden;
	align-items: center;
	margin-top: 40px;
	position: relative;
	&::before,
	&::after {
		content: "";
		flex: 0 0 calc((100vw - 512px) / 2);
	}
	@media ${device.mobile} {
		margin-top: 24px;
	}
`;

const StyledImage = styled.img`
	border-radius: 56px;
	transition: all 0.5s ease-out;
	width: 512px;
	opacity: ${(props) => (props.focused ? 1 : 0.3)};
	transform: ${(props) => (props.focused ? "scale(1)" : "scale(0.8)")};
	user-select: none;

	@media ${device.mobile} {
		width: calc(100% - 48px);
		margin: 0 24px;
		border-radius: 32px;
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	flex: 0 0 auto; /* VERY important */
	display: flex;
	justify-content: center;
	@media ${device.mobile} {
		width: 100%;
	}
`;

const Badge = styled.span`
	position: absolute;
	top: 6px;
	padding: 8px 12px;
	background-color: white;
	border-radius: 56px;
	z-index: 100;
	font-size: 14px;
	pointer-events: none;
`;

const Carousel = () => {
	const [image, setImage] = useState(1);
	const carouselRef = useRef(null);
	const drag = useRef({ isDragging: false, startX: 0, scrollLeft: 0 });

	// Robust scrollToImage using getBoundingClientRect
	const scrollToImage = (index) => {
		const carousel = carouselRef.current;
		const imageEl = document.getElementById(`carousel-${index}`);
		if (!carousel || !imageEl) return;

		const carouselRect = carousel.getBoundingClientRect();
		const imageRect = imageEl.getBoundingClientRect();

		// center positions in viewport coordinates
		const carouselCenter = carouselRect.left + carouselRect.width / 2;
		const imageCenter = imageRect.left + imageRect.width / 2;

		// how much we need to move the carousel's scrollLeft (positive = scroll right)
		const delta = imageCenter - carouselCenter;

		// animate horizontally without affecting page vertical scroll
		carousel.scrollBy({ left: delta, behavior: "smooth" });
	};

	// ----- wheel handler -----
	useEffect(() => {
		const box = carouselRef.current;
		if (!box) return;
		let isScrolling = false;

		const handleWheel = (event) => {
			event.preventDefault();
			if (isScrolling) return;
			isScrolling = true;

			setImage((prev) => {
				const next =
					event.deltaY > 0
						? prev === images.length
							? 1
							: prev + 1
						: prev === 1
						? images.length
						: prev - 1;
				scrollToImage(next);
				return next;
			});

			setTimeout(() => (isScrolling = false), 400);
		};

		box.addEventListener("wheel", handleWheel, { passive: false });
		return () => box.removeEventListener("wheel", handleWheel);
	}, []);

	// ----- drag & touch handlers -----
	useEffect(() => {
		const carousel = carouselRef.current;
		if (!carousel) return;

		const startDrag = (e) => {
			drag.current.isDragging = true;
			drag.current.startX = e.pageX ?? e.touches[0].pageX;
			drag.current.scrollLeft = carousel.scrollLeft;
		};

		const onDrag = (e) => {
			if (!drag.current.isDragging) return;
			e.preventDefault();
			const x = e.pageX ?? e.touches[0].pageX;
			const walk = drag.current.startX - x;
			carousel.scrollLeft = drag.current.scrollLeft + walk;
		};

		const stopDrag = () => {
			if (!drag.current.isDragging) return;
			drag.current.isDragging = false;

			// children wrappers -> image elements
			const wrappers = Array.from(carousel.children);
			const children = wrappers.map((w) => w.querySelector("img"));

			const carouselCenter = carousel.scrollLeft + carousel.offsetWidth / 2;
			let closestIndex = 1;
			let minDistance = Infinity;

			children.forEach((child, idx) => {
				if (!child) return;
				// compute child center relative to carousel scroll
				const childCenter = child.offsetLeft + child.offsetWidth / 2;
				const distance = Math.abs(carouselCenter - childCenter);
				if (distance < minDistance) {
					minDistance = distance;
					closestIndex = idx + 1;
				}
			});

			setImage(closestIndex);
			scrollToImage(closestIndex);
		};

		// mouse
		carousel.addEventListener("mousedown", startDrag);
		carousel.addEventListener("mousemove", onDrag);
		window.addEventListener("mouseup", stopDrag);
		carousel.addEventListener("mouseleave", stopDrag);

		// touch
		carousel.addEventListener("touchstart", startDrag, { passive: true });
		carousel.addEventListener("touchmove", onDrag, { passive: false });
		window.addEventListener("touchend", stopDrag);

		return () => {
			carousel.removeEventListener("mousedown", startDrag);
			carousel.removeEventListener("mousemove", onDrag);
			window.removeEventListener("mouseup", stopDrag);
			carousel.removeEventListener("mouseleave", stopDrag);

			carousel.removeEventListener("touchstart", startDrag);
			carousel.removeEventListener("touchmove", onDrag);
			window.removeEventListener("touchend", stopDrag);
		};
	}, []);

	// ----- auto-scroll interval -----
	useEffect(() => {
		const interval = setInterval(() => {
			setImage((prev) => {
				const next = prev === images.length ? 1 : prev + 1;
				scrollToImage(next);
				return next;
			});
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<StyledCarousel ref={carouselRef}>
			{images.map((img, idx) => (
				<ImageWrapper key={idx}>
					{idx + 1 === image && <Badge>{img.badge}</Badge>}
					<StyledImage
						id={`carousel-${idx + 1}`}
						src={img.image}
						alt={img.badge}
						focused={idx + 1 === image}
					/>
				</ImageWrapper>
			))}
		</StyledCarousel>
	);
};

export default Carousel;
