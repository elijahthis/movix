import HomeSection from "../HomeSection";
import MovieBlock from "../MovieBlock";
import ActBlock from "../ActBlock";
import Carousel from "../Carousel";

const FeaturedCasts = () => {
	const movieList = [
		{
			name: "Keanu Reeves",
			image: "/images/keanu.svg",
		},
		{
			name: "Ryan Reynolds",
			image: "/images/reynolds.svg",
		},
		{
			name: "Timothée Chalamet",
			image: "/images/chalamet.svg",
		},
		{
			name: "Chloë Grace Moretz",
			image: "/images/chloe.svg",
		},
		{
			name: "Keanu Reeves",
			image: "/images/keanu.svg",
		},
	];

	return (
		<HomeSection title="Featured Casts">
			<Carousel>
				{movieList.map((item, ind) => (
					<ActBlock movieInfo={item} key={ind} />
				))}
			</Carousel>
		</HomeSection>
	);
};

export default FeaturedCasts;
