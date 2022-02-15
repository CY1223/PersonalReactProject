import "../../styles/Card.css";

import React, { Component, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Draggable } from "react-beautiful-dnd";

import CardEditor from "./CardEditor";

export default function Card(props){
  const dispatch = useDispatch();
  const card = useSelector(state => state.cardsById[props.cardId]);
  const[hover, setHover] = useState(false);
  const[editing, setEditing] = useState(false);
  const[text, setText]= useState("");
  const index = props.index;

  const startHover = () => {
    setHover(true);
  }
  const endHover = () =>{
    setHover(false);
  }

  const startEditing = () =>{
    setHover(false);
    setEditing(true);
    setText(card.text);

  }

  const endEditing =()=>{
    setHover(false);
    setEditing(false);
  }

  const editCard = async text =>{
    const cardSelected = card;
    endEditing();
    dispatch({
      type: "CHANGE_CARD_TEXT",
      payload: { cardId: cardSelected._id, cardText: text }
    });
  }
  const deleteCard = async()=>{
      const cardSelected = card;
      const listId = props.listId;

      if (window.confirm("Are you sure to delete this card?")) {
        dispatch({
          type: "DELETE_CARD",
          payload: { cardId: cardSelected._id, listId }
        });
    }
  }

  const editCardUI = () =>{
    return (
      <Draggable draggableId={card._id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="Card"
            onMouseEnter={startHover}
            onMouseLeave={endHover}
          >
            {hover && (
              <div className="Card-Icons">
                <div className="Card-Icon" onClick={startEditing}>
                  <ion-icon name="create" />
                </div>
              </div>
            )}

            {card.text}
          </div>
        )}
      </Draggable>
    );
  }

  const nonEditCardUI = () =>{
    return (
      <CardEditor
        text={card.text}
        onSave={editCard}
        onDelete={deleteCard}
        onCancel={endEditing}
      />
    );
  }

  return editing ? nonEditCardUI(): editCardUI()
       
};
