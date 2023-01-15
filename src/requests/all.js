import { request } from "../utils/axios";
import { toast } from "react-toastify";
import { APIKey } from "../config/env";

export const fetchTopRated = async () => {
	try {
		const res = await request.get(`movie/top_rated?api_key=${APIKey}`);
		console.log(res);
		return res;
	} catch (err) {
		console.log(err?.response?.data);
		console.log(err?.response?.data?.message);
		throw err;
	}
};

export const fetchPopular = async () => {
	try {
		const res = await request.get(`movie/popular?api_key=${APIKey}`);
		console.log(res);
		return res;
	} catch (err) {
		console.log(err?.response?.data);
		console.log(err?.response?.data?.message);
		throw err;
	}
};

export const fetchLatest = async () => {
	try {
		const res = await request.get(`movie/latest?api_key=${APIKey}`);
		console.log(res);
		return res;
	} catch (err) {
		console.log(err?.response?.data);
		console.log(err?.response?.data?.message);
		throw err;
	}
};

export const fetchGenres = async () => {
	try {
		const res = await request.get(`genre/movie/list?api_key=${APIKey}`);
		console.log(res);
		return res;
	} catch (err) {
		console.log(err?.response?.data);
		console.log(err?.response?.data?.message);
		throw err;
	}
};
