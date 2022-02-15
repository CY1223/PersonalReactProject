import "../../styles/List.css";

import React, { Component, useState,useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Droppable, Draggable } from "react-beautiful-dnd";

import Card from "./Card";
import CardEditor from "./CardEditor";
import ListEditor from "./ListEditor";

import shortid from "shortid";
import { changeListTitle } from "../../actions";

export default function List(props){
  const dispatch = useDispatch();
  const  list = useSelector(state => state.listsById[props.listId]);
  const [editingTitle, setEditingTitle]= useState(false);
  const [title,setTitle]= useState(list.title);
  const [addingCard, setAddingCard] = useState(false);
  const index = props.index;

  const toggleAddingCard = () =>{
    setAddingCard(!addingCard);
  }

  const addCard = async cardText =>{
    const listId  = props.listId;
    toggleAddingCard();
    const cardId = shortid.generate();
    dispatch({
      type: "ADD_CARD",
      payload: { cardText, cardId, listId }
    });
  }

  const toggleEditingTitle = () =>{
    setEditingTitle(!editingTitle);
  }

  const handleChangeTitle = e =>{
    setTitle(e.target.value);
  }

  const editListTitle = async () => {
    const listId = props.listId
    const { listTitle } = title;

    toggleEditingTitle();

    dispatch({
      type: "CHANGE_LIST_TITLE",
      payload: { listId, listTitle: title }
    });
  };

  const deleteList = async () => {
    const listId = props.listId;
    const cards = list.cards;
    if (window.confirm("Are you sure to delete this list?")) {
      dispatch({
        type: "DELETE_LIST",
        payload: {listId, cards: cards}
      });
    }
  };

  return (
    <Draggable draggableId={list._id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="List"
        >
          {editingTitle ? (
            <ListEditor
              list={list}
              title={title}
              handleChangeTitle={handleChangeTitle}
              saveList={editListTitle}
              onClickOutside={editListTitle}
              deleteList={deleteList}
            />
          ) : (
            <div className="List-Title" onClick={toggleEditingTitle}>
              {list.title}
            </div>
          )}

          <Droppable droppableId={list._id}>
            {(provided, _snapshot) => (
              <div ref={provided.innerRef} className="Lists-Cards">
                {list.cards &&
                  list.cards.map((cardId, index) => (
                    <Card
                      key={cardId}
                      cardId={cardId}
                      index={index}
                      listId={list._id}
                    />
                  ))}

                {provided.placeholder}

                {addingCard ? (
                  <CardEditor
                    onSave={addCard}
                    onCancel={toggleAddingCard}
                    adding
                  />
                ) : (
                  <div className="Toggle-Add-Card" onClick={toggleAddingCard}>
                    <ion-icon name="add" /> Add a card
                  </div>
                )}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}
