import Hero from "../components/Home/Hero";
import FeaturedMovie from "../components/Home/FeaturedMovie";
import NewArrival from "../components/Home/NewArrival";
import FeaturedCasts from "../components/Home/FeaturedCasts";

const Home = () => {
	return (
		<main>
			<Hero />
			<FeaturedMovie />
			<NewArrival />
			<FeaturedCasts />
		</main>
	);
};

export default Home;
