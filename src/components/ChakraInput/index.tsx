import { useState } from "react";
import "./style.scss";
import {
	Input,
	InputGroup,
	InputRightElement,
	Button,
	Icon,
} from "@chakra-ui/react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

interface ChakraInputProps {
	type: string;
	placeholder: string;
}

const ChakraInput = ({ type, placeholder, ...rest }: ChakraInputProps) => {
	const [showPassword, setShowPassword] = useState(false);
	const handlePasswordVisibility = () => setShowPassword(!showPassword);

	return (
		<InputGroup className={`ChakraInput--${type}`}>
			<Input
				className={`ChakraInput__input ChakraInput__input`}
				type={showPassword ? "text" : type}
				placeholder={placeholder}
				// {...rest}
			/>
			<InputRightElement className={`ChakraInput__passEye`}>
				<Button onClick={handlePasswordVisibility}>
					{showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
				</Button>
			</InputRightElement>
		</InputGroup>
	);
};

export default ChakraInput;
