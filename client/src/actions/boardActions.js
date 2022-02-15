import { CONSTANTS } from "../actions";

export const moveList = (oldListIndex, newListIndex)=>{
    return{
        type: CONSTANTS.MOVE_LIST,
        payload:{oldListIndex, newListIndex}
    };
};

export const deleteList = (listId)=>{
    return{
        type: CONSTANTS.DELETE_LIST,
        payload:{listId}
    };
};