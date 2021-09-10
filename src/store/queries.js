import { useQuery } from "react-query";
import { getAllProducts } from "../api";

export default function ProductQuery() {
  return useQuery("books", getAllProducts);
}
