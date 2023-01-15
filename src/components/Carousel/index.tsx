import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.scss";

interface CarouselProps {
	children: JSX.Element[];
}

const Carousel = ({ children }: CarouselProps) => {
	const responsive = {
		0: { items: 1 },
		568: { items: 2 },
		1024: { items: 4 },
	};

	return (
		<AliceCarousel
			mouseTracking
			items={children}
			responsive={responsive}
			controlsStrategy="alternate"
		/>
	);
};

export default Carousel;
