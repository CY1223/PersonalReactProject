import "../../styles/CardEditor.css";

import React, { Component, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import EditButtons from "./EditButtons";

export default function CardEditor(props){
  const[text, setText]=useState(props.text||"");
  const handleChangeText =event =>{
    setText(event.target.value)
  }
  const onEnter = event =>{
    if(event.keyCode === 13){
      event.preventDefault();
      props.onSave(text);
    }
  }
  return (
    <div className="Edit-Card">
      <div className="Card">
        <TextareaAutosize
          autoFocus
          className="Edit-Card-Textarea"
          placeholder="Enter the text for this card..."
          value={text}
          onChange={handleChangeText}
          onKeyDown={onEnter}
        />
      </div>
      <EditButtons
        handleSave={() => props.onSave(text)}
        saveLabel={props.adding ? "Add card" : "Save"}
        handleDelete={props.onDelete}
        handleCancel={props.onCancel}
      />
    </div>
  );

}
