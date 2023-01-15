import "./style.scss";
import Rating from "../Rating";

interface ActBlockProps {
	movieInfo: {
		name: string;
		image: string;
	};
}

const ActBlock = ({ movieInfo }: ActBlockProps) => {
	return (
		<div className="ActBlock">
			<img src={movieInfo.image} alt="" />
			<p className="ActBlock__title">{movieInfo.name}</p>
		</div>
	);
};

export default ActBlock;
