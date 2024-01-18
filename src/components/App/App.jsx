import {useState, useEffect} from 'react';
// require('')
import Form from '../Form/Form.jsx';
import axios from 'axios'; // import axios in order to use it!
import { fetchToDoItems } from '../../toDoApp/ToDoApp.api.js';

// a function represents a component!
function App () {
  const [toDoList, setToDoList] = useState([
    {title: "Go to sleep early!", description: "Go to sleep at 9PM"},
    {title: "Finish to-do App!", description: "Due next week!"}
  ]);

  {/* useEffect is used for initial load */}
  useEffect(() => {
    // body of effect
    console.log("hi hi");

    // api call:
    const toDoItemPromise = fetchToDoItems();
    toDoItemPromise
      .then((response) => {
        
        console.log('SERVER DATA: ', response.data);
        setToDoList(response.data);
      })
      .catch((error) => {
      console.log('ERROR IN GET: ', error);
      });
  }, []);

  return (
    <div>
      <h1>TO DO APP</h1>
      <Form />

 
      {/* HOW TO RENDER A LIST */}
      {toDoList.map((toDoItem, itemIndex) => {
        return (
          <ul key={itemIndex}>
            <li kid="toDoItemTitle">{toDoItem.title}</li>
            <p id="description">{toDoItem.description}</p>
          </ul>
        )
      })};
    </div>
)} //end of App function

export default App
