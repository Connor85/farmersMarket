import React from 'react';
import PropTypes from 'prop-types';

function ProduceItem (props){
  return (

    <div>
      <li>{props.produce}</li>
      <style jsx>{`
        list-style-type: none;
        `}</style>
    </div>

  );
}

ProduceItem.PropTypes = {
  produce: PropTypes.string.isRequired
};

export default ProduceItem;