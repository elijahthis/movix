import { ImdbIcon, RottenTomatoIcon } from "../svgs";

interface RatingProps {
	type: "IMDb" | "Rotten Tomatoes";
}

const Rating = ({ type }: RatingProps) => {
	return (
		<div>
			<ImdbIcon />
		</div>
	);
};

export default Rating;
