import { GET_SMURFS_START, GET_SMURFS_SUCCESS, GET_SMURFS_FAILURE } from '../Actions/FormActions';

const initialState = [{
    name: '',
    age: 0,
    height: 0,
}];

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_SMURFS_START: 
        return{
            ...state,
                name: '',
                heigt: 0,
        }
        case GET_SMURFS_SUCCESS:
        return{
            ...state,
            name: '',
            loading: false,
            height: action.payload
        }
        case GET_SMURFS_FAILURE:
            return{
                ...state,
                error: action.payload,
                loading: false,
                name: null
            }
        default:
            return state; 
    }
}

export default reducer;
/** 
 * !The returns an object representing the state of the data. Sample data BELOW...
 * [
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  }
];
*/