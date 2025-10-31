import React, { useEffect, useState, useRef } from "react";
import { styled } from "styled-components";

const images = [
	"https://picsum.photos/id/10/800/500",
	"https://picsum.photos/id/20/800/500",
	"https://picsum.photos/id/30/800/500",
	"https://picsum.photos/id/40/800/500",
	"https://picsum.photos/id/50/800/500",
	"https://picsum.photos/id/60/800/500",
	"https://picsum.photos/id/70/800/500",
	"https://picsum.photos/id/80/800/500",
	"https://picsum.photos/id/90/800/500",
	"https://picsum.photos/id/100/800/500",
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
`;

const StyledImage = styled.img`
	border-radius: 56px;
	transition: all 0.5s ease-out;
	width: 512px;
	opacity: ${(props) => (props.focused ? 1 : 0.3)};
	transform: ${(props) => (props.focused ? "scale(1)" : "scale(0.8)")};
	user-select: none;
`;

const Carousel = () => {
	const [image, setImage] = useState(1);
	const carouselRef = useRef(null);
	const intervalRef = useRef(null);

	const drag = useRef({
		isDragging: false,
		startX: 0,
		scrollLeft: 0,
	});

	// ---------------- Mouse Wheel Handler ----------------
	useEffect(() => {
		const box = carouselRef.current;
		let isScrolling = false;

		const handleWheel = (event) => {
			event.preventDefault();
			if (isScrolling) return;
			isScrolling = true;

			setImage((prev) => {
				let next;
				if (event.deltaY > 0) {
					next = prev === images.length ? 1 : prev + 1;
				} else {
					next = prev === 1 ? images.length : prev - 1;
				}

				document
					.getElementById(`carousel-${next}`)
					.scrollIntoView({ behavior: "smooth", inline: "center" });

				return next;
			});

			setTimeout(() => {
				isScrolling = false;
			}, 400);
		};

		box.addEventListener("wheel", handleWheel, { passive: false });
		return () => box.removeEventListener("wheel", handleWheel);
	}, []);

	// ---------------- Drag & Touch Handlers ----------------
	useEffect(() => {
		const carousel = carouselRef.current;

		const startDrag = (e) => {
			drag.current.isDragging = true;
			drag.current.startX = e.pageX || e.touches[0].pageX;
			drag.current.scrollLeft = carousel.scrollLeft;
		};

		const onDrag = (e) => {
			if (!drag.current.isDragging) return;
			e.preventDefault();
			const x = e.pageX || e.touches[0].pageX;
			const walk = drag.current.startX - x;
			carousel.scrollLeft = drag.current.scrollLeft + walk;
		};

		const stopDrag = () => {
			if (!drag.current.isDragging) return;
			drag.current.isDragging = false;

			// Snap to closest image
			const children = Array.from(carousel.children).filter(
				(el) => el.tagName === "IMG"
			);
			const carouselCenter = carousel.scrollLeft + carousel.offsetWidth / 2;
			let closestIndex = 0;
			let minDistance = Infinity;

			children.forEach((child, idx) => {
				const childCenter = child.offsetLeft + child.offsetWidth / 2;
				const distance = Math.abs(carouselCenter - childCenter);
				if (distance < minDistance) {
					minDistance = distance;
					closestIndex = idx + 1;
				}
			});

			setImage(closestIndex);
			document
				.getElementById(`carousel-${closestIndex}`)
				.scrollIntoView({ behavior: "smooth", inline: "center" });
		};

		// Mouse events
		carousel.addEventListener("mousedown", startDrag);
		carousel.addEventListener("mousemove", onDrag);
		window.addEventListener("mouseup", stopDrag);
		carousel.addEventListener("mouseleave", stopDrag);

		// Touch events
		carousel.addEventListener("touchstart", startDrag);
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

	// ---------------- Auto-scroll on hover ----------------
	const startAutoScroll = () => {
		if (intervalRef.current) return;
		intervalRef.current = setInterval(() => {
			setImage((prev) => {
				const next = prev === images.length ? 1 : prev + 1;
				document
					.getElementById(`carousel-${next}`)
					.scrollIntoView({ behavior: "smooth", inline: "center" });
				return next;
			});
		}, 2000);
	};

	const stopAutoScroll = () => {
		clearInterval(intervalRef.current);
		intervalRef.current = null;
	};

	return (
		<StyledCarousel
			ref={carouselRef}
			onMouseEnter={startAutoScroll}
			onMouseLeave={stopAutoScroll}
		>
			{images.map((img, idx) => (
				<StyledImage
					key={idx + 1}
					id={`carousel-${idx + 1}`}
					src={img}
					focused={idx + 1 === image}
				/>
			))}
		</StyledCarousel>
	);
};

export default Carousel;
