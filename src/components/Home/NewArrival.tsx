import { useState, useEffect } from "react";
import HomeSection from "../HomeSection";
import MovieBlock from "../MovieBlock";
import Carousel from "../Carousel";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchPopular } from "../../requests/all";

const NewArrival = () => {
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
						imdb: item?.vote_average * 10,
						rotten: item?.vote_average * 10,
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
