import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { myContext } from "../Context/myContext";
import Smurfs from "./Smurfs";
import AddSmurfForm from "./AddSmurfForm";


class App extends Component {
  state = {
    smurfs: [],
    newSmurf: {
      name: "",
      age: "",
      height: "",
    },
  };
  componentDidMount() {
    axios.get("http://localhost:3333/smurfs")
    .then(res => {
      this.setState({
        ...this.state,
        smurfs: res.data,
      })
    })
    .catch(err => {
      console.log(err)
    })
  };


  addNewSmurf = () => {
    axios.post("http://localhost:3333/smurfs", this.state.newSmurf)
    .then(res => {
      this.setState({
        ...this.state,
        smurfs: res.data,
      });
    })
  } 

  onChange = e => {
    this.setState({
      ...this.state,
      newSmurf: {
        ...this.state.newSmurf,
        [e.target.name]: e.target.value,
      }
    })
  }

  render() {

    
    return (
      <div className="App">
        <myContext.Provider value={{ ...this.state, addNewSmurf: this.addNewSmurf}}>
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <Smurfs  />
          <AddSmurfForm onChange={this.onChange}/>
        </myContext.Provider>
      </div>
    );
  }
}

export default App;
