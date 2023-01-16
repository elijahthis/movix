import { LogoIcon } from "../svgs";
import SearchBar from "../SearchBar";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import "./style.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Header = () => {
	const user = useSelector((state: RootState) => state.user.user);

	return (
		<header className="Header">
			<LogoIcon />
			<SearchBar />
			<div className="Header__nameMenu">
				<p>Hi, {user?.displayName}</p>
				<div className="menubox">
					<HiOutlineMenuAlt4 />
				</div>
			</div>
		</header>
	);
};

export default Header;
