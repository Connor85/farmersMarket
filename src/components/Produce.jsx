import React from 'react';
import PropTypes from 'prop-types';

function Produce (props){
    return (
        <div>
            <h3>{props.month}</h3>
            <ul>
                <li>{props.selection}</li>
            </ul>
        </div>
    );
}

Produce.PropTypes = {
    month: PropTypes.string.isRequired,
    selection: PropTypes.array.isRequired
};

export default Produce;