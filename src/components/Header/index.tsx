import { LogoIcon } from "../svgs";
import SearchBar from "../SearchBar";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import "./style.scss";

const Header = () => {
	return (
		<header className="Header">
			<LogoIcon />
			<SearchBar />
			<div className="Header__nameMenu">
				<p>Hi, $Fullname</p>
				<div className="menubox">
					<HiOutlineMenuAlt4 />
				</div>
			</div>
		</header>
	);
};

export default Header;
