import React from 'react';
import PropTypes from 'prop-types';
import ProduceItem from './ProduceItem';

function Produce (props){
  return (
    <div>
      <h3>{props.month}</h3>
      <ul>
        {props.selection.map((item, index) =>
          <ProduceItem produce={item}
            key = {index} />
        )}
      </ul>
    </div>
  );
}




Produce.PropTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
};

export default Produce;