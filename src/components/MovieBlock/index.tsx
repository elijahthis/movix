import "./style.scss";
import Rating from "../Rating";

interface MovieBlockProps {
	movieInfo: {
		title: string;
		image: string;
		country: string;
		startYear: number;
		endYear?: number | string;
		imdb: number;
		rotten: number;
		genres: string[];
	};
}

const MovieBlock = ({ movieInfo }: MovieBlockProps) => {
	return (
		<div className="MovieBlock">
			<img src={movieInfo.image} alt="" />
			<p className="MovieBlock__countryTime">
				<span>{movieInfo.country}</span>
				{", "}
				<span>{movieInfo.startYear}</span>
				{movieInfo.endYear ? (
					<>
						{" - "}
						<span>{movieInfo.endYear}</span>
					</>
				) : (
					<span></span>
				)}
			</p>
			<p className="MovieBlock__title">{movieInfo.title}</p>
			<div className="MovieBlock__ratings">
				<Rating variant="IMDb" value={movieInfo.imdb} />
				<Rating variant="Rotten Tomatoes" value={movieInfo.rotten} />
			</div>
			<p className="MovieBlock__genres">
				{movieInfo.genres.map((item, ind) => (
					<>
						<span key={ind}>{item}</span>
						{ind < movieInfo.genres.length - 1 && <span>, </span>}
					</>
				))}
			</p>
		</div>
	);
};

export default MovieBlock;
