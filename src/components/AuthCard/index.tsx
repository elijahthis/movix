import { useState } from "react";
import "./style.scss";
import { AuthIcon } from "../svgs";
import ChakraInput from "../ChakraInput";
import Button from "../Button";

interface AuthCardProps {
	variant: "sign-in" | "sign-up";
}

const AuthCard = ({ variant }: AuthCardProps) => {
	return (
		<div className="AuthCard">
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
						<ChakraInput type="email" placeholder="Email" />
						<ChakraInput type="password" placeholder="Password" />
					</>
				) : (
					<>
						<ChakraInput type="text" placeholder="Full Name" />
						<ChakraInput type="email" placeholder="test@test.com" />
						<ChakraInput type="password" placeholder="Password" />
					</>
				)}
			</div>
			<Button variant="auth">
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
		</div>
	);
};

export default AuthCard;
