import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props) {
  return (
    <div>
        <h3>{props.location} - {props.day}</h3>
        <h4>{props.hours}</h4>
        <h5>{props.booth}</h5>
    </div>
  );
}

export default Schedule;