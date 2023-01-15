import HomeSection from "../HomeSection";
import MovieBlock from "../MovieBlock";
import Carousel from "../Carousel";
import { fetchPopular } from "../../requests/all";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const FeaturedMovie = () => {
	const [movieList, setMovieList] = useState([]);

	const genres = useSelector((state: RootState) => state.genres.genres);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetchPopular();
				console.log(res);
				setMovieList(
					res.data?.results?.map((item: any) => ({
						title: item?.title,
						image: `https://image.tmdb.org/t/p/original${item?.poster_path}`,
						country: "USA",
						startYear: new Date(item?.release_date).getFullYear(),
						// endYear: "Current",
						imdb: 86.0,
						rotten: 97,
						genres: item?.genre_ids.map(
							(item: any) => genres.find((gItem) => gItem?.id === item)?.name
						),
					}))
				);
			} catch (e) {
				console.log(e);
			}
		};

		fetchData();
	}, []);

	const oldMovieList = [
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
			title: "Batman Begins",
			image: "/images/batman.svg",
			country: "USA",
			startYear: 2016,
			imdb: 82.0,
			rotten: 70,
			genres: ["Action", "Adventure"],
		},
		{
			title: "Spider-Man : Into The Spider Verse",
			image: "/images/spiderman.svg",
			country: "USA",
			startYear: 2005,
			imdb: 84.0,
			rotten: 87,
			genres: ["Animation", "Action", "Adventure"],
		},
		{
			title: "Dunkirk",
			image: "/images/dunkirk.svg",
			country: "USA",
			startYear: 2018,
			imdb: 78.0,
			rotten: 94,
			genres: ["Action", "Drama", "History"],
		},
		{
			title: "Stranger Things",
			image: "/images/stranger-things.svg",
			country: "USA",
			startYear: 2017,
			imdb: 86.0,
			rotten: 97,
			genres: ["Action", "Adventure", "Horror"],
		},
	];

	return (
		<HomeSection title="Featured Movie">
			<Carousel>
				{movieList.map((item, ind) => (
					<MovieBlock movieInfo={item} key={ind} />
				))}
			</Carousel>
		</HomeSection>
	);
};

export default FeaturedMovie;
