import React, {useState, useEffect} from 'react';
import "./App.css";

const App = () => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([]);


  useEffect( ()=> {
    const api = "https://swapi.dev/api/people";
  
    const getData = async ()=> {
      const res = await fetch(api);
      const data = await res.json();
      console.log(data);
      setPeople(data);

    }

    getData()

  },[]);

  useEffect( ()=> {
    const fileApi = "http https://swapi.dev/api/films/";
    async function Films() {
      const res = await fetch(fileApi);
      const data = await res.json();
      console.log('films', data);
    }
    Films()
  },[])

  // Fetch charactersn and films from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
