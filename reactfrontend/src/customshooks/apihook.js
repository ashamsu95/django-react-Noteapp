import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export let useGetNotes = () => {
  let { data, isloading: isNotesLoading } = useQuery(["notes"], async () => {
    return Axios.get("/api/notes/").then((res) => res.data);
  });
  return { data, isNotesLoading };
};
