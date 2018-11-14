import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Schedule(props) {
  return (
    <div>

      {/* <style jsx>{`
        h3 {

        }
      `}</style> */}

      <h3>
        <style jsx>{`
        text-decoration: underline;
        text-align: center;
        `}</style>
        {props.location} - {props.day}
      </h3>
      <h4>
      <style jsx>{`
        text-align: center;
        `}</style>
        Time: {props.hours} Booth: {props.booth}
      </h4>
    </div>
  );
}

export default Schedule;