import axios from 'axios';

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";
export const SEND_SMURFS_START = "SEND_SMURFS_START";
export const SEND_SMURFS_SUCCESS = "SEND_SMURFS_SUCCESS";
export const SEND_SMURFS_FAILURE = "SEND_SMURFS_FAILURE";

export const getSmurfs = () => dispatch => {
    dispatch({type: GET_SMURFS_START});
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
        dispatch({ type: GET_SMURFS_SUCCESS, payload: response.data})
    })
    .catch( error => {
        dispatch({ type: GET_SMURFS_FAILURE, payload: error})
    });
};

export const sendSmurf = (smurfData) => dispatch => {
    dispatch({type: SEND_SMURFS_START});
    axios.post('http://localhost:3333/smurfs', smurfData)
    .then(response => {
        dispatch({ type: SEND_SMURFS_SUCCESS, payload: response.data})
    })
    .catch( error => {
        dispatch({ type: SEND_SMURFS_FAILURE, payload: error})
    });
};
