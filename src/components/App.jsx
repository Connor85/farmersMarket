import React from 'react';
import ScheduleList from './ScheduleList';
import PropTypes from 'prop-types';
import ProduceList from './ProduceList';

function App(){
  var styles = {
    display: 'inlineBlock'
  };
  return (
    <div style={styles}>
      <style jsx>{`
        font-family: Helvetica;
        display: inline-block;
      `}</style>
      <div style={styles}>
        <ProduceList/>
      </div>
      <div style={styles}>
        <ScheduleList/>
      </div>
      farmersMarket
    </div>
  );
}

//App.propTypes = {
//};

export default App;
