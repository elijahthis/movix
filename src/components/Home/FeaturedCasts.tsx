import HomeSection from "../HomeSection";
import MovieBlock from "../MovieBlock";
import ActBlock from "../ActBlock";
import Carousel from "../Carousel";
import { fetchCast } from "../../requests/all";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const FeaturedCasts = () => {
	const [castList, setCastList] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetchCast();
				console.log(res);
				setCastList(
					res.data?.results?.map((item: any) => ({
						name: item?.name,
						image: `https://image.tmdb.org/t/p/original${item?.profile_path}`,
					}))
				);
			} catch (e) {
				console.log(e);
			}
		};

		fetchData();
	}, []);

	return (
		<HomeSection title="Featured Casts">
			<Carousel>
				{castList.map((item, ind) => (
					<ActBlock movieInfo={item} key={ind} />
				))}
			</Carousel>
		</HomeSection>
	);
};

export default FeaturedCasts;
