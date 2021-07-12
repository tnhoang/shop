import React from "react";
import { useQuery } from "react-query";

import Loader from "react-loader-spinner";

import { getAllBooks } from "../../../api";
import CardTest from "../CardTest";

export default function ListCardTest() {
  const { data, error, isLoading, isError } = useQuery("books", getAllBooks);

  if (isLoading) {
    return <Loader type="ThreeDots" color="#cccccc" height={30} />;
  }

  if (isError) {
    return `Error happend: ${error.messsage}`;
  }

  return (
    <>
      <h1>data here:</h1>
      {data.map(({ author, title, id }) => (
        // <div key={id} id={id}>
        //   <h2>author: {author}</h2>
        //   <h2>title: {title}</h2>
        // </div>
        <CardTest id={id} author={author} title={title} />
      ))}
    </>
  );
}
