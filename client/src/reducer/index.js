import { combineReducers } from "redux";
import cardsById from "./cardReducer";
import board from "./boardReducer";
import listsById from "./listReducer";
export default combineReducers({
    board,
    cardsById,
    listsById
});