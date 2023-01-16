import HomeSection from "../HomeSection";
import VideoBlock from "../VideoBlock";
import Carousel from "../Carousel";
import { fetchCast, fetchTrailers } from "../../requests/all";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const ExclusiveVideos = () => {
	const [videosList, setVideosList] = useState<any>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// const fetchData = async (movie_id: number) => {
		// 	try {
		// 		const res = await fetchTrailers(movie_id);
		// 		console.log(res);
		// 		setVideosList([...videosList, res.data?.results[0]?.key]);
		// 		console.log("videosList", videosList);
		// 	} catch (e) {
		// 		console.log(e);
		// 	}
		// };

		const bigFunc = async () => {
			const allData = Promise.all(
				Array(10)
					.fill(0)
					.map(async function (item, ind) {
						const getres = await fetchTrailers(ind + 12);
						return getres;
					})
			);
			try {
				const allResults = await allData;
				setVideosList(
					allResults.map((item) => ({
						name: item?.data?.results[0]?.name,
						key: item?.data?.results[0]?.key,
					}))
				);
			} catch (e) {
				console.log(e);
			}
		};

		bigFunc();
	}, []);

	console.log("videosList", videosList);

	return (
		<HomeSection title="Exclusive Videos">
			<Carousel
				responsive={{
					0: { items: 1 },
					568: { items: 1 },
					1024: { items: 2.5 },
				}}
			>
				{videosList.map((item: { name: string; key: string }, ind: number) => (
					<VideoBlock movieInfo={item} key={ind} />
				))}
			</Carousel>
		</HomeSection>
	);
};

export default ExclusiveVideos;
