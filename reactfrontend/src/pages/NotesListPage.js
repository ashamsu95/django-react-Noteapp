import React from "react";
import { useGetNotes } from "../customshooks/apihook";
import ListItem from "../components/ListItem";
import Addbutton from "../components/Addbutton";
// import { useState } from "react";
let NotesListPage = () => {
  let { data, isNotesLoading } = useGetNotes();
  if (isNotesLoading) return <h1>loading...</h1>;

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{data?.length}</p>
      </div>
      <div className="notes-list">
        {data?.map((notes) => {
          return <ListItem key={notes.id} note={notes} />;
        })}
      </div>
      <Addbutton />
    </div>
  );
};

export default NotesListPage;
