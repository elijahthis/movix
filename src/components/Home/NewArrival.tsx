import HomeSection from "../HomeSection";
import MovieBlock from "../MovieBlock";
import Carousel from "../Carousel";

const NewArrival = () => {
	const movieList = [
		{
			title: "Dune",
			image: "/images/dune.svg",
			country: "USA",
			startYear: 2021,
			imdb: 84.0,
			rotten: 75,
			genres: ["Action", "Adventure", "Drama"],
		},
		{
			title: "No Time To Die",
			image: "/images/bond.svg",
			country: "USA",
			startYear: 2021,
			imdb: 76.0,
			rotten: 68,
			genres: ["Action", "Adventure", "Thriller"],
		},
		{
			title: "Shang-Chi and the Legend of the Ten Rings",
			image: "/images/shang.svg",
			country: "USA",
			startYear: 2021,
			imdb: 79.0,
			rotten: 71,
			genres: ["Action", "Adventure", "Fantasy"],
		},
		{
			title: "Don't Breathe 2",
			image: "/images/breathe.svg",
			country: "USA",
			startYear: 2021,
			imdb: 61.0,
			rotten: 46,
			genres: ["Action", "Drama", "Horror"],
		},
		{
			title: "Dune",
			image: "/images/dune.svg",
			country: "USA",
			startYear: 2021,
			imdb: 84.0,
			rotten: 75,
			genres: ["Action", "Adventure", "Drama"],
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
