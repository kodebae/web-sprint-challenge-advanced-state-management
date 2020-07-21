
import React, { useEffect } from 'react';
import AddSmurfForm from './AddSmurfForm';
import axios from 'axios';
import { connect } from 'react-redux';
import getSmurfs from '../Components/AddSmurfForm';
import Smurfs from '../Components/Smurfs';

function App (props){
  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log(res.data);
        getSmurfs(res.data);
      })
      .catch((err) => {
        console.error("server error", err);
      });
  // render() {
    return (
      <div className="App">
        <AddSmurfForm />
      </div>
      
    )
  })}

  export default connect(null, {})(Smurfs)
