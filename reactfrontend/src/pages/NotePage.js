import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { useState } from "react";
import Axios from "axios";

const NotePage = () => {
  let navigation = useNavigate();
  let [nowNote, setnote] = useState("");
  let noteId = useParams();

  // Api to bring note details
  let { data, isloading } = useQuery(["note"], async () => {
    return await Axios.get(`/api/note/${noteId.id}`)
      .then((res) => res.data)
      .then((res) => setnote(res.body));
  });

  // function to fetch api id and update it
  let updatenote = async () => {
    if (noteId.id !== "new" && nowNote == "") deleteNote();
    else
      await Axios.put(`/api/note/${noteId.id}/update`, {
        body: nowNote,
      }).finally(navigation("/"));
  };

  // function for deleting note
  let deleteNote = async () => {
    await Axios.delete(`/api/note/${noteId.id}/delete`).then(() =>
      navigation("/")
    );
  };
  // Function to create new note
  let newNote = async () => {
    await Axios.post(`/api/note/create`, {
      body: nowNote,
    }).finally(navigation("/"));
  };
  return (
    <div className="note">
      <div className="note-header">
        <h3>
          {noteId.id !== "new" ? (
            <ArrowLeft onClick={() => updatenote()} />
          ) : (
            <Link to="/">
              <ArrowLeft />
            </Link>
          )}
        </h3>
        {noteId.id !== "new" ? (
          <button onClick={() => deleteNote()}>Delete</button>
        ) : (
          <button onClick={() => newNote()}>Save</button>
        )}
      </div>
      <textarea
        onChange={(e) => setnote(e.target.value)}
        defaultValue={nowNote}
      ></textarea>
    </div>
  );
};

export default NotePage;
