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
	position: relative;
	touch-action: pan-y;
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
	flex: 0 0 auto;
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
	const drag = useRef({
		isDragging: false,
		startX: 0,
		startY: 0,
		scrollLeft: 0,
		pointerId: null,
		isHorizontal: false,
		cancelSnap: false,
	});

	const scrollToImage = (index) => {
		const carousel = carouselRef.current;
		const imageEl = document.getElementById(`carousel-${index}`);
		if (!carousel || !imageEl) return;

		const carouselRect = carousel.getBoundingClientRect();
		const imageRect = imageEl.getBoundingClientRect();

		const carouselCenter = carouselRect.left + carouselRect.width / 2;
		const imageCenter = imageRect.left + imageRect.width / 2;

		const delta = imageCenter - carouselCenter;

		carousel.scrollBy({ left: delta, behavior: "smooth" });
	};

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

	useEffect(() => {
		const carousel = carouselRef.current;
		if (!carousel) return;

		const resetDragState = (overrides = {}) => {
			drag.current = {
				isDragging: false,
				startX: 0,
				startY: 0,
				scrollLeft: 0,
				pointerId: null,
				isHorizontal: false,
				cancelSnap: false,
				...overrides,
			};
		};

		const snapToClosestImage = () => {
			const wrappers = Array.from(carousel.children);
			const children = wrappers.map((w) => w.querySelector("img"));

			const carouselCenter = carousel.scrollLeft + carousel.offsetWidth / 2;
			let closestIndex = 1;
			let minDistance = Infinity;

			children.forEach((child, idx) => {
				if (!child) return;
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

		const releasePointer = () => {
			if (
				carousel.releasePointerCapture &&
				drag.current.pointerId !== null &&
				carousel.hasPointerCapture?.(drag.current.pointerId)
			) {
				carousel.releasePointerCapture(drag.current.pointerId);
			}
			drag.current.pointerId = null;
		};

		const startDrag = (e) => {
			if (e.button !== undefined && e.button !== 0) return;

			resetDragState({
				isDragging: true,
				startX: e.clientX,
				startY: e.clientY,
				scrollLeft: carousel.scrollLeft,
				pointerId: e.pointerId ?? null,
			});

			if (carousel.setPointerCapture && e.pointerId !== undefined) {
				carousel.setPointerCapture(e.pointerId);
			}
		};

		const onDrag = (e) => {
			if (!drag.current.isDragging) return;
			if (
				drag.current.pointerId !== null &&
				e.pointerId !== undefined &&
				e.pointerId !== drag.current.pointerId
			)
				return;

			const currentX = e.clientX;
			const currentY = e.clientY;
			const deltaX = drag.current.startX - currentX;
			const deltaY = Math.abs(drag.current.startY - currentY);

			if (!drag.current.isHorizontal) {
				if (deltaY > 10 && deltaY > Math.abs(deltaX)) {
					const pointerId = drag.current.pointerId;
					resetDragState({ cancelSnap: true, pointerId });
					releasePointer();
					return;
				}

				if (Math.abs(deltaX) < 6) return;
				drag.current.isHorizontal = true;
			}

			e.preventDefault();
			carousel.scrollLeft = drag.current.scrollLeft + deltaX;
		};

		const stopDrag = () => {
			if (!drag.current.isDragging) return;

			releasePointer();

			const shouldSnap = !drag.current.cancelSnap;
			resetDragState();

			if (shouldSnap) {
				snapToClosestImage();
			}
		};

		const cancelDrag = () => {
			if (!drag.current.isDragging) return;
			releasePointer();
			resetDragState({ cancelSnap: true });
		};

		carousel.addEventListener("pointerdown", startDrag);
		carousel.addEventListener("pointermove", onDrag);
		carousel.addEventListener("pointerup", stopDrag);
		carousel.addEventListener("pointercancel", cancelDrag);
		carousel.addEventListener("pointerleave", cancelDrag);

		return () => {
			carousel.removeEventListener("pointerdown", startDrag);
			carousel.removeEventListener("pointermove", onDrag);
			carousel.removeEventListener("pointerup", stopDrag);
			carousel.removeEventListener("pointercancel", cancelDrag);
			carousel.removeEventListener("pointerleave", cancelDrag);
		};
	}, []);

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
