import { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "success":
      return { ...state, data: action.data, loading: false, error: false };
    case "fail":
      return { ...state, error: action.error, loading: false };

    case "pending":
      return { ...state, loading: true };
    default:
      throw new Error("Something wrong");
  }
}
function useFetchPokemon() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "pending" });
    axios
      .get(" https://app.pokemon-api.xyz/pokemon/all")
      .then((res) => {
        console.log(res);
        dispatch({ type: "success", data: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "fail", error: err });
      });
    return () => {
      console.log("cleeean");
    };
  }, []);
  return state;
}
export default useFetchPokemon;
