import { fetchToDoItems } from '../../toDoApp/ToDoApp.api.js';
import { useEffect } from 'react';
import { deleteToDoItem } from '../../toDoApp/ToDoApp.api.js'

              // We need toDoList from App.jsx for our .map
function ListView(toDoList) {
  // Delete item function
  const handleClickDelete = (toDoItemId) => {
    // confirm delete button works
    console.log("in handleClickDelete");
    // ID of Item
    console.log("DELETE ID: ", toDoItemId);
    
    // Make Axios Delete Call
    deleteToDoItem(toDoItemId)
      .then((response) => {
        // Success
        // refresh items on page
        fetchToDoItems();
      })
      .catch((error) => {
        console.log("Error in AXIOS Delete: ", error)
      });
  } // end if handleClickDelete()

    return (
        <div>
            {toDoList.toDoList.map((toDoItem, itemIndex) => {
                return (
                <ul key={itemIndex}>
                        <li id="toDoItemTask">{toDoItem.task}</li>
                        <button type="button" id="completed">&#x2713;</button>
                        <button type="button" id="deleteButton" 
                        onClick={(event) => handleClickDelete(toDoItem.id)}>X</button>
                </ul>
                )
            })};
        </div>
    )
};

export default ListView;