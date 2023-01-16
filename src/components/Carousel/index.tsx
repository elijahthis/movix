import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.scss";

interface CarouselProps {
	children: JSX.Element[];
	responsive?: {
		0: { items: number };
		568: { items: number };
		1024: { items: number };
	};
}

const Carousel = ({
	children,
	responsive = {
		0: { items: 1 },
		568: { items: 2 },
		1024: { items: 4 },
	},
}: CarouselProps) => {
	return (
		<AliceCarousel
			mouseTracking
			items={children}
			responsive={responsive}
			controlsStrategy="alternate"
			disableDotsControls={true}
		/>
	);
};

export default Carousel;
