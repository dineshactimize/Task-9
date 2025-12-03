import { combineReducers } from "redux";
import { getReducer } from "./getDataReducer";

export const rootReducer=combineReducers({
   getproductdata:getReducer,
})