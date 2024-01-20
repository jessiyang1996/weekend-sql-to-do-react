import {useState, useEffect} from 'react';
// require('')
import Form from '../Form/Form.jsx';
import axios from 'axios'; // import axios in order to use it!
import { fetchToDoItems } from '../../toDoApp/ToDoApp.api.js';
import ListView from '../listView/listView.jsx';

// a function represents a component!
function App () {
  const [toDoList, setToDoList] = useState([
    {title: "Go to sleep early!"},
    {title: "Finish to-do App!"}
  ]);

  // GET Route
  const refreshToDoList = () => {
    const toDoItemPromise = fetchToDoItems();
    toDoItemPromise
      .then((response) => {
        console.log('SERVER DATA: ', response.data);
        setToDoList(response.data);
        console.log("New toDoList is: ", toDoList);
      })
      .catch((error) => {
      console.log('ERROR IN AXIOS GET: ', error);
      });
  } // end of refreshToDoList

  // useEffect is used for initial load - where our refresh is being called
  // only runs once - on initial page load!
  useEffect(() => {
    // body of effect
    console.log("hi hi");

    // api call:
    refreshToDoList();
    }, []); // end of useEffect

  return (
    <div>
      <Form refreshToDoList={refreshToDoList}/>

            {/* we need toDoList for the loop (.map) */}
      <ListView toDoList={toDoList} refreshToDoList={refreshToDoList}/>

    </div>
)} //end of App function

export default App
