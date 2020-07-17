import { connect } from 'react-redux';

// the form componenet goes here. 
// export default component; Not this way if we are connecting this component! We will ahae to mapStateToProps in this file. 


const mapStateToProps = state => {
    return {
        name: state.name,
        age: state.age,
        height: state.height,
    }
  }
export default connect(null, {addSmurf})(PostForm)

const addSmurf = (smurf) => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then((res) => {
        console.log("post res", res);
        setSmurfs(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };