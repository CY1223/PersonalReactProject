import { CONSTANTS } from "../actions";

export const addList = (listId,listTitle)=>{
    return{
        type: CONSTANTS.ADD_LIST,
        payload: {listId,listTitle}
    };
};

export const changeListTitle = (listId,listTitle)=>{
    return{
        type: CONSTANTS.CHANGE_LIST_TITLE,
        payload:{listId,listTitle}
    };
};

export const deleteListById = (listId)=>{
    return{
        type: CONSTANTS.DELETE_LIST_BY_ID,
        payload:{listId}
    };
};

export const moveCard = ( oldCardIndex, newCardIndex, sourceListId, destListId)=>{
    return{
        type: CONSTANTS.MOVE_CARD,
        payload:{ oldCardIndex, newCardIndex, sourceListId, destListId }
    };
};

export const deleteCard = (deletedCardId, listId) =>{
    return{
        type: CONSTANTS.DELETE_CARD,
        payload:{deletedCardId, listId}
    };
};