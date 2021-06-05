import {
	FETCH_TEMPERATURE_REQUEST,
	FETCH_TEMPERATURE_SUCCESS,
	FETCH_TEMPERATURE_FAILURE,
} from "./constants";

const initialState = {
	loading: false,
	error: false,
	temperature: null,
};
const tempratureReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_TEMPERATURE_REQUEST:
			return {
				...state,
				loading: true,
				error:false,
			};
		case FETCH_TEMPERATURE_SUCCESS:
			return {
				...state,
				temperature: payload,
			};
		case FETCH_TEMPERATURE_FAILURE:
			return {
				...state,
				error: true,
				loading:false,
			};
		default:
			return state;
	}
};

export default tempratureReducer;
