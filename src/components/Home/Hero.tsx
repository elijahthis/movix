import Header from "../Header";
import "./style.scss";
import Rating from "../Rating";
import Button from "../Button";
import { PlayIcon } from "../svgs";

const Hero = () => {
	return (
		<section className="Hero">
			<Header />
			<div className="Hero__crux">
				<h1>John Wick 3 : Parabellum</h1>
				<div className="ratings">
					<Rating variant="IMDb" value={86} />
					<Rating variant="Rotten Tomatoes" value={97} />
				</div>
				<p className="desc">
					John Wick is on the run after killing a member of the international
					assassins' guild, and with a $14 million price tag on his head, he is
					the target of hit men and women everywhere.
				</p>
				<Button variant="watch" icon={<PlayIcon />}>
					WATCH TRAILER
				</Button>
			</div>
		</section>
	);
};

export default Hero;
