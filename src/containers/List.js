import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";

const API = process.env.API;

const List = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    searchTerm: "",
    error: "",
  });

  const getMovie = async () => {
    // search
    const res = await fetch(`${API}&s=batman`);
    const resJSON = await res.json();

    if (resJSON) {
      setState({
        data: resJSON.Search,
        loading: false,
        error: "",
      });
    }
  };

  useEffect(() => {
    // const res = await fetch("../../assets/data.json");
    getMovie();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (state.searchTerm === "") {
      return setState({ ...state, error: "Please write a valid text" });
    }

    const response = await fetch(`${API}&s=${state.searchTerm}`);
    const data = await response.json();

    if (!data.Search) {
      return setState({ ...state, error: "There are no results." });
    }

    return setState({
      data: data.Search,
      searchTerm: "",
      error: "",
    });
  };

  const { data, loading } = state;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="row">
        <div className="col-md-4 offset-md-4 p-4">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              onChange={(e) => setState({...state, searchTerm: e.target.value })}
              value={state.searchTerm}
              autoFocus
            />
          </form>
          <p className="text-white">{state.error ? state.error : ""}</p>
        </div>
      </div>
      <div className="row pt-2">
        {data.map((movie, i) => (
          <Card movie={movie} key={i} />
        ))}
      </div>
    </>
  );
};

export default List;
