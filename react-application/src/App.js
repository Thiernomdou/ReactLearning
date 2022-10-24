import {useState} from 'react'
import Item from "./Item";
function App() {

  //useState c'est les données d'un composant
  const [monState, setMonState] = useState(10);
  return (
    <div className="App">
      <Item />
      {monState}
    </div>
  );
}

export default App;
