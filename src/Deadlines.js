
import './App.css';
import { useState, useEffect } from "react";

function Deadlines() {

  // useEffect []

    // make an api call using `fetch`
    // insomnia rest client 
      // https://dummyjson.com/products
      // GET ^

      // click dropdown - 'generate code'
        // - pick JS / fetch

        //const options = {method: 'GET'};

       const [listOfItems, setListOfItems] = useState([]);

        useEffect(() => {
          const options = {method: 'GET'};
          fetch('https://dummyjson.com/products', options)
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(err => console.error(err));
        }, []);

  // you would then modify the {item.title} {item.deadline} etc to match the json from an api
  return (
    <div className="App">
      <header className="Deadlines-header">
      <h2>deadlines</h2>

        <>
        <ul>

        
          {listOfItems.map(
            (item, index)=>{
              return (
                
                <li>{item.title} <span>{item.description}</span> <span className="completionField">{item.completed ? '√' : 'X'}</span></li>
              );
            }
          )}
          

        </ul>
        </>



        
      </header>
    </div>
  );
}

export default Deadlines;
