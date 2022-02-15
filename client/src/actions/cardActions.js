import { CONSTANTS } from "../actions";

export const addCard=(cardText, cardId, listId)=>{
    return{
        type:CONSTANTS.ADD_CARD,
        payload:{cardText, cardId, listId}
    };
};

export const changeCardText = (cardText, cardId) =>{
    return{
        type:CONSTANTS.CHANGE_CARD_TEXT,
        payload:{cardText, cardId}
    };
};

export const deleteCard =(cardId) =>{
    return{
        type:CONSTANTS.DELETE_CARD,
        payload:{cardId}
    };
};

export const deleteListByCardId =(cardIds)=>{
    return{
        type:CONSTANTS.DELETE_LIST_BY_CARD_ID,
        payload:{cardIds}
    };
};