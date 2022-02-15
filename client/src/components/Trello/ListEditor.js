import "../../styles/ListEditor.css";

import React, { Component, createRef, useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function ListEditor(props){
  const ref = useRef();
  const { title, handleChangeTitle, deleteList } = props;
  const onEnter = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      props.saveList();
    }
  };

  const handleClick = e => {
    // const node = ref.current;

    // if (node.contains(e.target)) {
    //   return;
    // }

    props.onClickOutside();
  };

  useEffect(()=>{
    document.addEventListener("click", handleClick, false);
    
    return () => {
      document.removeEventListener("click", handleClick, false);
    }
  });
  
  return (
    <div className="List-Title-Edit" ref={ref}>
      <TextareaAutosize
        autoFocus
        className="List-Title-Textarea"
        placeholder="Enter list title..."
        value={title}
        onChange={handleChangeTitle}
        onKeyDown={onEnter}
        style={{ width: deleteList ? 220 : 245 }}
      />
      {deleteList && <ion-icon name="trash" onClick={deleteList} />}
    </div>
  );
}

