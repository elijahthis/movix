import Hero from "../components/Home/Hero";
import FeaturedMovie from "../components/Home/FeaturedMovie";
import NewArrival from "../components/Home/NewArrival";
import FeaturedCasts from "../components/Home/FeaturedCasts";
import ExclusiveVideos from "../components/Home/ExclusiveVideos";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { SETGENRES } from "../redux/slices/genresSlice";
import { fetchGenres } from "../requests/all";

const Home = () => {
	const dispatch = useDispatch();
	const genres = useSelector((state: RootState) => state.genres.genres);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetchGenres();
				console.log(res);
				dispatch(SETGENRES(res.data?.genres));
			} catch (e) {
				console.log(e);
			}
		};

		fetchData();
	}, []);

	console.log("genres", genres);
	return (
		<main>
			<Hero />
			<FeaturedMovie />
			<NewArrival />
			<ExclusiveVideos />
			<FeaturedCasts />
		</main>
	);
};

export default Home;
