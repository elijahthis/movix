import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login, Register, Home } from "./pages";
import { fetchGenres } from "./requests/all";
import { RootState } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import { SETGENRES } from "./redux/slices/genresSlice";
import { Provider } from "react-redux";
import AuthProvider from "./providers/AuthProvider";
import { store } from "./redux/store";

//react-toastify...for notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const user = useSelector((state: RootState) => state.user.user);

	return (
		<Provider store={store}>
			<AuthProvider>
				<div className="App">
					<BrowserRouter>
						<Routes>
							<Route
								path="/"
								element={user ? <Home /> : <Navigate to={"/login"} />}
							/>

							<Route path="/register" element={<Register />} />
							<Route path="/login" element={<Login />} />
						</Routes>
						<ToastContainer
							position="top-right"
							autoClose={5000}
							hideProgressBar={true}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover={true}
						/>
					</BrowserRouter>
				</div>
			</AuthProvider>
		</Provider>
	);
}

export default App;
