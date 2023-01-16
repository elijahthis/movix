import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import React from "react";

interface ProtectedRouteProps {
	children: JSX.Element | null;
	alternateRoute: string;
}

const ProtectedRoute = ({ children, alternateRoute }: ProtectedRouteProps) => {
	const user = useSelector((state: RootState) => state.user.user);

	return user ? children : <Navigate to={alternateRoute} />;
};

export default ProtectedRoute;
