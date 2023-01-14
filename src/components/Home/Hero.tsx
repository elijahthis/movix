import Header from "../Header";
import "./style.scss";
import Rating from "../Rating";

const Hero = () => {
	return (
		<section className="Hero">
			<Header />
			<div>
				<h1>John Wick 3 : Parabellum</h1>
				<div></div>
				<p>
					John Wick is on the run after killing a member of the international
					assassins' guild, and with a $14 million price tag on his head, he is
					the target of hit men and women everywhere.
				</p>
			</div>
		</section>
	);
};

export default Hero;
