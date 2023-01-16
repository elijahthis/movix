import app, { auth } from "../base";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { SETUSER } from "../redux/slices/userSlice";
import { RootState } from "../redux/store";

const AuthProvider = ({ children }: { children: JSX.Element }) => {
	const dispatch = useDispatch();
	const user = useSelector((state: RootState) => state.user.user);

	onAuthStateChanged(auth, (currentUser) => {
		dispatch(SETUSER(currentUser));

		console.log("user", user);
	});

	return <>{children}</>;
};

export default AuthProvider;
