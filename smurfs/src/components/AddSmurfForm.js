import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {getSmurfs, sendSmurf} from '../Actions/FormActions';

const smurfSendInitialState = { name : "", age : "", height : "" };

const AddOneSmurf = props =>
{
  const [ newSmurf, setNewSmurf ] = useState( smurfSendInitialState );


  useEffect( () => props.getSmurfs());

  if( props.smurfsData ) props.getSmurfs();
    
  const onChange = e => setNewSmurf( { ...newSmurf, [ e.target.name ]: e.target.value } );
   
  const onSubmit = e =>
  {
    e.preventDefault();
    props.sendSmurf( { ...newSmurf, height : newSmurf.height + "cm" } );
    setNewSmurf( smurfSendInitialState );
  }

  return(
    <div className = "container" >
      <h1>Welcome To Smurfs Village</h1>
      <h2>Here Are The Smurfs</h2>
      <h2>Add Smurfs</h2>
      <div className = "formContainer" >
        <form onSubmit = { onSubmit } >
          <input type = "text" name = "name" onChange = { onChange } value = { newSmurf.name } placeholder = "Enter Name" />
          <input type = "number" name = "age" onChange = { onChange } value = { newSmurf.age } placeholder = "Enter Age" />
          <input type = "text" name = "height" onChange = { onChange } value = { newSmurf.height } placeholder = "Enter Height" />
          <button onClick={sendSmurf}>Add A Smurf</button>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = state => { return { smurfsData : state.smurfsReducer } };

export default connect( mapStateToProps, { getSmurfs, sendSmurf } )( AddOneSmurf );





// example data
// {
//     name: "Brainey",
//     age: 200,
//     height: "5cm",
//     id: 0
//   }