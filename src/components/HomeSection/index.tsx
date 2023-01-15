import "./style.scss";
import { FiChevronRight } from "react-icons/fi";

interface HomeSectionProps {
	title: string;
	children: JSX.Element;
}

const HomeSection = ({ title, children }: HomeSectionProps) => {
	return (
		<section className="HomeSection">
			<div className="HomeSection__titleBar">
				<h3>{title}</h3>
				<div className="seeMore">
					<span>See more</span>
					<FiChevronRight />
				</div>
			</div>
			<div>{children}</div>
		</section>
	);
};

export default HomeSection;
