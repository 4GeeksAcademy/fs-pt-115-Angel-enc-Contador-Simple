import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap';
import PropTypes from 'prop-types';
import '@fortawesome/fontawesome-free/css/all.min.css';

//create your first component
function SecondsCounter(props) {
	const digitFour = Number(props.digitFour) || 0;
	const digitThree = Number(props.digitThree) || 0;
	const digitTwo = Number(props.digitTwo) || 0;
	const digitOne = Number(props.digitOne) || 0;

	return (<div className="master d-flex justify-content-center align-items-center fs-1">
		<div className="reloj p-2 bg-dark text-white rounded">
			<i className="fas fa-clock"></i>
		</div>
		<div className="four p-2">{digitFour % 10}</div>
		<div className="three p-2">{digitThree % 10}</div>
		<div className="two p-2">{digitTwo % 10}</div>
		<div className="one p-2">{digitOne % 10}</div>
	</div>);
}
SecondsCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};



export default SecondsCounter