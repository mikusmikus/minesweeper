import React from 'react';
import './App.css';
import 'flexboxgrid';
import Minesweeper from './components/minesweeper/minesweeper';

const App = () => {
  return (
    <div>
      <div className="container">
        <Minesweeper />
      </div>
    </div>
  );
};

export default App;
