import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import React from "react";

interface ProtectedRouteProps {
	component: React.ReactNode | null;
	alternateRoute: string;
}

const ProtectedRoute = ({ component, alternateRoute }: ProtectedRouteProps) => {
	const user = useSelector((state: RootState) => state.user.user);
	return (
		<Route
			path="/"
			element={user ? { component } : <Navigate to={alternateRoute} />}
		/>
	);
};

export default ProtectedRoute;
