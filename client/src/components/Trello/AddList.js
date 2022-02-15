import "../../styles/AddList.css";

import React, { Component, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import ListEditor from "./ListEditor";
import shortid from "shortid";
import EditButtons from "./EditButtons";

export default function AddList(props){
    const dispatch = useDispatch();
    const[title, setTitle]= useState("");

    const handleChangeTitle = (e) =>{
      setTitle(e.target.value);
    }

    const createList = async () =>{
      const currTitle = title
      props.toggleAddingList();
      dispatch({
        type: "ADD_LIST",
        payload: { listId: shortid.generate(), listTitle: currTitle }
      });
    }

    return (
      <div className="Add-List-Editor">
        <ListEditor
          title={title}
          handleChangeTitle={handleChangeTitle}
          onClickOutside={()=>props.toggleAddingList()}
          saveList={createList}
        />

        <EditButtons
          handleSave={createList}
          saveLabel={"Add list"}
          handleCancel={()=>props.toggleAddingList()}
        />
      </div>
    );

}
