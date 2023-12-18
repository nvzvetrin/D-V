import React,{Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Home  from './Components/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <Header />
          <Home />
        </div>
      </div>
    )
  }
} 

export default App;
