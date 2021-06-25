
import './App.css';
import Card from './Components/Card/Card';
import data from '../src/Data.json';
import { useEffect, useState } from 'react';

function App() {

  // this is the main information about the user 
  const [profiles, setProfiles] = useState([]);

  // set main information
  useEffect(()=>{
    setProfiles(data);
  }, [])

  return (
    <div className="App">
      <h5 className="title">Highlights</h5>
      <hr />
      <div className="cart-container">
      {
        profiles.map(profile=><Card {...profile} />) // display main information
      }
      </div>
    </div>
  );
}

export default App;
