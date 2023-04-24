
import './App.css';

function List() {

  const listOfItems = ["Take out bins", "Feed dog"];

  return (
    <div className="App">
      <header className="App-header">
        <>
        <ul>


          {listOfItems.map(
            (item, index)=>{
              return (
                <li>{item}</li>
              );
            }
          )}
          

        </ul>
        </>



        
      </header>
    </div>
  );
}

export default List;
