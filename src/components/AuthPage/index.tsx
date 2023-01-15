import "./style.scss";

interface AuthPageProps {
	children: JSX.Element;
}

const AuthPage = ({ children }: AuthPageProps) => {
	return <main className="AuthPage">{children}</main>;
};

export default AuthPage;
