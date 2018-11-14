import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props) {
  return (
    <div>

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