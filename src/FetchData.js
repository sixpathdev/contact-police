import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from './logo.jpeg';

function FetchData() {
  const [states, setStates] = useState([]);
  const [name, setName] = useState([]);

  const url = "/policeJson.json";

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setStates(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 h5 text-white text-center mt-2 mt-md-2">
          <img src={Logo} alt="Police logo" className="img-responsive" width="140px" height="140px" />
          <p className="h6 py-1">Easy Contact of police across the states</p>
        </div>
        <div className="col-12 col-md-6 offset-md-3">
          <label htmlFor="select-state" className="text-white h5">
            Choose state police to contact
          </label>
          <select
            className="form-control"
            id="select-state"
            onChange={e => setName(e.target.value)}
          >
            <option defaultValue>Choose state to contact</option>
            {states.map(state => (
              <option key={state.state} value={state.state}>
                {state.state}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12 col-md-4 offset-md-4 mt-4 text-center">
          <h4 className="text-white">Details</h4>
          <ul className="list-group">
            {states.map(state =>
              state.state === name
                ? state.phones.map((phone, index) => (
                    <li key={index} className="list-group-item h6">
                      {phone}
                    </li>
                  ))
                : null
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FetchData;
