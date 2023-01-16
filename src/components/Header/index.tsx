import { LogoIcon } from "../svgs";
import SearchBar from "../SearchBar";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import "./style.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import MenuDrawer from "../MenuDrawer";
import { useState, useRef } from "react";
import { useDisclosure } from "@chakra-ui/react";

const Header = () => {
	const user = useSelector((state: RootState) => state.user.user);
	const btnRef = useRef(null);

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<header className="Header">
			<LogoIcon />
			<SearchBar />
			<div className="Header__nameMenu">
				<p>Hi, {user?.displayName}</p>
				<button className="menubox" ref={btnRef} onClick={onOpen}>
					<HiOutlineMenuAlt4 />
				</button>
				{/* <MenuDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} /> */}
			</div>
		</header>
	);
};

export default Header;
