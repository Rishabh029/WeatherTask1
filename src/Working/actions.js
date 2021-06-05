import axios from "axios";
import {
	FETCH_TEMPERATURE_REQUEST,
	FETCH_TEMPERATURE_SUCCESS,
	FETCH_TEMPERATURE_FAILURE,
} from "./constants";

export const fetchTemperature = () => {
	return async (dispatch) => {
		dispatch({ type: FETCH_TEMPERATURE_REQUEST, payload: null });
		await axios
			.get(
				`http://api.openweathermap.org/data/2.5/weather?lat=28.6692&lon=77.4538&appid=edc1625d79007658230e4a1a315b2597`
			)
			.then((response) => {
				const temperature = response.data.main.temp;
				console.log("response from api call ===>", temperature);
				dispatch({
					type: FETCH_TEMPERATURE_SUCCESS,
					payload: temperature,
				});
			})
			.catch((error) => {
				// const errorMsg = error.message;
				console.log("error getting data", error);
				dispatch({
					type: FETCH_TEMPERATURE_FAILURE,
					payload: null,
				});
			});
	};
};
