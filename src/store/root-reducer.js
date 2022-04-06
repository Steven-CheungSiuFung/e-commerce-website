import { combineReducers } from "redux";
import { UserReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
    user: UserReducer,
})