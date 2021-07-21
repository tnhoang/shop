import { useQuery } from "react-query";
import { getAllBooks } from "../api";

export default function BookQuery() {
  return useQuery("books", getAllBooks);
}
