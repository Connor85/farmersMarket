import React from 'react';
import Schedule from './ScheduleList';
import PropTypes from 'prop-types';
import ProduceList from './ProduceList';

function App(){
  var styles = {
  };
  return (
    <div style={styles}>
      {/* <Schedule/> */}
      <ProduceList/>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>
      farmersMarket
    </div>
  );
}

//App.propTypes = {
//};

export default App;
