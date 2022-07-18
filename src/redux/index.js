import { combineReducers } from "redux";
import userReducer from "../redux/reducer/userReducer";

const allReducers = combineReducers({
	user: userReducer,
});

export default allReducers;
