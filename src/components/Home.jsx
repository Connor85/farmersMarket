import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
    return (
      <div>
        <h1>Welcome to Connor and Brian's farm</h1>
        <Link to="/producelist">Produce List</Link> | <Link to="/schedulelist">Schedule</Link> | <Link to="/">Home</Link>
      </div>
    );
  }
  
  export default Home;