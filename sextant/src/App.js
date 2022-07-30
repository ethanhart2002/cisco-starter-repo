import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    </div>
  );
}

class banner extends React.Component{
  render() {
    return <div> Sextant.com </div>;
  }
}

class card extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
    <div className='card1'>
      <ol> 
        <li> Item 1 </li>
        <li> Item 2 </li>
        <li> Item 3 </li>
      </ol>
      <h2> Data Points List </h2>
    </div>
    );
  }
}


export default App;
