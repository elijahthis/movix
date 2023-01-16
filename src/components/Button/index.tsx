import "./style.scss";

interface ButtonProps {
	variant: "auth" | "watch";
	children: JSX.Element | string;
	icon?: JSX.Element;
	type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({ variant, children, icon, type = "button" }: ButtonProps) => {
	return (
		<button className={`Button Button--${variant}`} type={type}>
			{icon && icon}
			{children}
		</button>
	);
};

export default Button;
