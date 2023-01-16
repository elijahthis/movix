import "./style.scss";
import { Spinner } from "@chakra-ui/react";

interface ButtonProps {
	variant: "auth" | "watch";
	children: JSX.Element | string;
	icon?: JSX.Element;
	type?: "button" | "submit" | "reset" | undefined;
	loading?: boolean;
}

const Button = ({
	variant,
	children,
	icon,
	type = "button",
	loading = false,
}: ButtonProps) => {
	return (
		<button className={`Button Button--${variant}`} type={type}>
			{loading ? (
				<Spinner w={15} h={15} />
			) : (
				<>
					{icon && icon}
					{children}
				</>
			)}
		</button>
	);
};

export default Button;
