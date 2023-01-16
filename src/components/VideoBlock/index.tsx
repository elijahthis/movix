import "./style.scss";

interface VideoBlockProps {
	movieInfo: {
		name: string;
		key: string;
	};
}

const VideoBlock = ({ movieInfo }: VideoBlockProps) => {
	return (
		<div className="VideoBlock">
			<iframe
				width="420"
				height="315"
				src={`https://www.youtube.com/embed/${movieInfo.key}`}
			></iframe>
			<p className="VideoBlock__title">{movieInfo.name}</p>
		</div>
	);
};

export default VideoBlock;
