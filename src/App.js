import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./action/counter";

const App = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="card col-sm-4 mx-auto mt-5">
      <h5 className="card-header text-center">Counter React-Redux</h5>
      <div className="card-body mx-auto">
        <h5 className="card-title text-danger text-center">{counter}</h5>
        <button
          className="btn btn-danger m-3"
          onClick={() => dispatch(decrement(1))}
        >
          -
        </button>
        <button
          className="btn btn-success m-3"
          onClick={() => dispatch(increment(1))}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
