import React from 'react';
import ScheduleList from './ScheduleList';
import PropTypes from 'prop-types';
import ProduceList from './ProduceList';

function App(){
  return (
    <div>
      <style jsx>{`
        font-family: Helvetica;
        display: flex;
        width: 100%;
        margin: 5%;
        `}</style>
      <div>
        <ProduceList/>
      </div>
      <div>
        <ScheduleList/>
      </div>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
