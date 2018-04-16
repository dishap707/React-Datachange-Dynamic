import React from 'react';


const userOutput = (props) => {
	const divStyle = {
		width: '60%',
		padding: '16px',
		marginLeft: '250px',
		marginTop : '50px',
		border: '2px solid black',
		
	};
	return (
	<div classname = "UserOutput" style = {divStyle}>
		<p>Username: {props.userName}</p>
		<p> I am good </p>
	</div>
	);
};

export default userOutput;