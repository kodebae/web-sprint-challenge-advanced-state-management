import React, { useContext } from 'react';
import { myContext } from "../Context/myContext";
import OneSmurf from "./OneSmurf";

const Smurfs = () => {
	const {smurfs} = useContext(myContext);
	return (
		<div>
			{smurfs.map(smurf => (
				<OneSmurf
					key={smurf.id}
					smurf={smurf}
				/>
			))}
		</div>
	);
};

export default Smurfs;