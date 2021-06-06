import { WEATHER_SUCCESS, WEATHER_SEARCH_SUCCESS, WEATHER_REQUEST, WEATHER_SEARCH_REQUEST, WEATHER_CLEAR_RESULT} from 'store/wheather/constants';
import { WeatherState, WeatherActionTypes } from "store/wheather/types";

const initialState: WeatherState = {
  loading: true,
  weather: null,
  searchLoading: false,
  searchResult: []
};

export function weatherReducer(
  state = initialState,
  action: WeatherActionTypes
): WeatherState {
  switch (action.type) {
    case WEATHER_SEARCH_REQUEST:
      return {
        ...state,
        searchLoading: true,
      }
    case WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.payload,
        loading: false
      }
    case WEATHER_SEARCH_SUCCESS:
      return {
        ...state,
        searchResult: action.payload,
        searchLoading: false
      }
    case WEATHER_CLEAR_RESULT:
      return {
        ...state,
        searchResult:[],
      }
    default:
      return state;
  }
}
