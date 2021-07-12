import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { removeBook } from "../../../api";

import Loader from "react-loader-spinner";

export default function CardTest({ id, title, author }) {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(removeBook);

  const handleRemoveBook = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries("books");
  };
  return (
    <>
      <h3>{title}</h3>
      <h3>{author}</h3>
      <button onClick={handleRemoveBook}>
        {isLoading ? (
          <Loader type="ThreeDots" color="#FBFBFB" height={10} />
        ) : (
          "Remove"
        )}
      </button>
    </>
  );
}
