import { useState } from "react";
import "./style.scss";
import { AuthIcon } from "../svgs";
import ChakraInput from "../ChakraInput";
import Button from "../Button";
import app, { auth } from "../../base";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	User,
} from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface AuthCardProps {
	variant: "sign-in" | "sign-up";
}

const AuthCard = ({ variant }: AuthCardProps) => {
	const [loginData, setLoginData] = useState({ email: "", password: "" });
	const [signupData, setSignupData] = useState({
		fullName: "",
		email: "",
		password: "",
	});
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const registerFunc = async () => {
		setLoading(true);
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				signupData.email,
				signupData.password
			);
			const update = await updateProfile(auth.currentUser as User, {
				displayName: signupData.fullName,
			});
			console.log(user);
			if (user) navigate("/");
		} catch (e: any) {
			console.log(e);
			toast.error(e?.message);
		} finally {
			setLoading(false);
		}
	};

	const loginFunc = async () => {
		setLoading(true);
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginData.email,
				loginData.password
			);
			console.log(user);
			if (user) navigate("/");
		} catch (e) {
			console.log(e);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form
			className="AuthCard"
			onSubmit={(e) => {
				e.preventDefault();
				if (variant === "sign-up") registerFunc();
				else loginFunc();
			}}
		>
			<div className="AuthCard__icon">
				<AuthIcon />
			</div>
			<div className="AuthCard__welcome">
				<h4>Hi, Welcome</h4>
				<p>
					{variant === "sign-in"
						? "Please sign-in to your account and start your experience"
						: "Please sign-up to start your experience"}
				</p>
			</div>
			<div className="AuthCard__inputs">
				{variant === "sign-in" ? (
					<>
						<ChakraInput
							type="email"
							placeholder="Email"
							name="email"
							onChange={(e: any) =>
								setLoginData({ ...loginData, email: e?.target?.value })
							}
							required={true}
						/>
						<ChakraInput
							type="password"
							placeholder="Password"
							name="password"
							onChange={(e: any) =>
								setLoginData({ ...loginData, password: e?.target?.value })
							}
							required={true}
						/>
					</>
				) : (
					<>
						<ChakraInput
							type="text"
							placeholder="Full Name"
							name="fullName"
							onChange={(e: any) =>
								setSignupData({ ...signupData, fullName: e?.target?.value })
							}
							required={true}
						/>
						<ChakraInput
							type="email"
							placeholder="test@test.com"
							name="email"
							onChange={(e: any) =>
								setSignupData({ ...signupData, email: e?.target?.value })
							}
							required={true}
						/>
						<ChakraInput
							type="password"
							placeholder="Password"
							name="password"
							onChange={(e: any) =>
								setSignupData({ ...signupData, password: e?.target?.value })
							}
							required={true}
						/>
					</>
				)}
			</div>
			<Button variant="auth" type="submit" loading={loading}>
				{variant === "sign-in" ? "LOGIN" : "REGISTER"}
			</Button>

			<p className="AuthCard__otherAction">
				<span>
					{variant === "sign-in"
						? "Don’t have an account?"
						: "Already have an account?"}
				</span>
				<a href={variant === "sign-in" ? "/register" : "/login"}>
					{variant === "sign-in" ? "Register" : "Login"}
				</a>
			</p>
		</form>
	);
};

export default AuthCard;
