import imdbIcon from "../../assets/images/imdb.svg";
import rottenTomatoesIcon from "../../assets/images/rotten.svg";
import "./style.scss";

interface RatingProps {
	variant: "IMDb" | "Rotten Tomatoes";
	value: number;
}

const Rating = ({ variant, value }: RatingProps) => {
	return (
		<div className="Rating">
			<img src={variant === "IMDb" ? imdbIcon : rottenTomatoesIcon} alt="" />
			<span>
				{variant === "IMDb" ? value.toFixed(1) : value}
				{variant === "IMDb" ? " / 100" : "%"}
			</span>
		</div>
	);
};

export default Rating;
