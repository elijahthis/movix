import "./style.scss";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
	return (
		<div className="SearchBar">
			<input
				type="search"
				name=""
				id=""
				placeholder="What do you want to watch?"
			/>
			<IoSearch />
		</div>
	);
};

export default SearchBar;
