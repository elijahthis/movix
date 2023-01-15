import HomeSection from "../HomeSection";
import MovieBlock from "../MovieBlock";
import Carousel from "../Carousel";

const NewArrival = () => {
	const movieList = [
		{
			title: "Stranger Things",
			image: "/images/stranger-things.svg",
			country: "USA",
			startYear: 2016,
			endYear: "Current",
			imdb: 86.0,
			rotten: 97,
			genres: ["Action", "Adventure", "Horror"],
		},
		{
			title: "Stranger Things",
			image: "/images/stranger-things.svg",
			country: "USA",
			startYear: 2016,
			endYear: "Current",
			imdb: 86.0,
			rotten: 97,
			genres: ["Action", "Adventure", "Horror"],
		},
		{
			title: "Stranger Things",
			image: "/images/stranger-things.svg",
			country: "USA",
			startYear: 2016,
			endYear: "Current",
			imdb: 86.0,
			rotten: 97,
			genres: ["Action", "Adventure", "Horror"],
		},
		{
			title: "Stranger Things",
			image: "/images/stranger-things.svg",
			country: "USA",
			startYear: 2016,
			endYear: "Current",
			imdb: 86.0,
			rotten: 97,
			genres: ["Action", "Adventure", "Horror"],
		},
		{
			title: "Stranger Things",
			image: "/images/stranger-things.svg",
			country: "USA",
			startYear: 2016,
			endYear: "Current",
			imdb: 86.0,
			rotten: 97,
			genres: ["Action", "Adventure", "Horror"],
		},
	];

	return (
		<HomeSection title="New Arrival">
			<Carousel>
				{movieList.map((item, ind) => (
					<MovieBlock movieInfo={item} key={ind} />
				))}
			</Carousel>
		</HomeSection>
	);
};

export default NewArrival;
