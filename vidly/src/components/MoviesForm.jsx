import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const MoviesForm = () => {
  const param = useParams();
  const navigate = useNavigate();

  return (
    <>
      <h2 className="mb-4"> This is {param.id} number movie </h2>
      <button onClick={() => navigate("/movies")} className="btn btn-primary">
        Save
      </button>
    </>
  );
};

export default MoviesForm;
