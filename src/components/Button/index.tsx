import "./style.scss";

interface ButtonProps {
	variant: "auth" | "watch";
	children: JSX.Element | string;
	icon?: JSX.Element;
}

const Button = ({ variant, children, icon }: ButtonProps) => {
	return (
		<button className={`Button Button--${variant}`}>
			{icon && icon}
			{children}
		</button>
	);
};

export default Button;
