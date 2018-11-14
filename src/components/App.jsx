import React from 'react';
import ScheduleList from './ScheduleList';
import PropTypes from 'prop-types';
import ProduceList from './ProduceList';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';


function App() {
  return (
    <div>
      <style jsx>{`
        font-family: Helvetica;
        display: inline-block;
        width: 100%;
        margin: 5%;
        `}</style>
        <Home/>
      <Switch>
        <Route exact path='/producelist' component={ProduceList} />
        <Route exact path='/schedulelist' component={ScheduleList} />

      </Switch>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
