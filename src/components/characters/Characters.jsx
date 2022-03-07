import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Cards from "../cards/Cards";

const Characters = () => {
  //states
  const [page, setPage] = useState(1);

  //functions
  const fetchData = async ({ queryKey }) => {
    const data = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return data;
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  //useQuery
  const { data, status } = useQuery(["characters", page], fetchData);
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <div className="characters">
      {data.data.results.map((character) => {
        return <Cards character={character} key={character.id} />;
      })}
      <button onClick={handlePrevious} disabled={!(page > 1 ? true : false)}>
        Prevues
      </button>
      <button onClick={(_) => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default Characters;
