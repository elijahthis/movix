import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register, Home } from "./pages";
import { fetchGenres } from "./requests/all";
import { RootState } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import { SETGENRES } from "./redux/slices/genresSlice";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={
								// <ProtectedRoute>
								<Home />
								// {/* </ProtectedRoute> */}
							}
						/>

						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</BrowserRouter>
			</div>
		</Provider>
	);
}

export default App;
