import { deleteToDoItem, updateCompleteToDoItem } from '../../toDoApp/ToDoApp.api.js'
import './ListView.module.css';
              // We need toDoList from App.jsx for our .map
function ListView({toDoList, refreshToDoList}) {
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
        refreshToDoList();
      })
      .catch((error) => {
        console.log("Error in AXIOS Delete: ", error)
      });
  } // end of handleClickDelete()

  const handleCompletedTask = (toDoItemId) => {
    console.log("IN handleCompletedTask()");
    updateCompleteToDoItem(toDoItemId)
      .then((response) => {
        // Success!
        refreshToDoList();
      })
      .catch((error) => {
        // Not Successful
        console.error("Error in AXIOS Put: ", error);
      })
  } // end of handleCompletedTask
  
    return (
        <div>
            {toDoList.map((toDoItem, itemIndex) => (
                <ul key={itemIndex}>
                        {
                        toDoItem.completed ?(
                        <>
                        <li id="toDoItemTask" className="crossedThrough">{toDoItem.task}</li>
                        {/* <p>task completed? {toDoItem.completed ? 'TRUE' : 'FALSE'}</p> */}
                        <button type="button" id="completed" onClick={() => handleCompletedTask(toDoItem.id)}
                          >&#x2713;</button> </>):(<> <li id="toDoItemTask" className="completed">{toDoItem.task}</li>
                          {/* <p>task completed? {toDoItem.completed ? 'TRUE' : 'FALSE'}</p> */}
                          <button type="button" id="completed" onClick={() => handleCompletedTask(toDoItem.id)}
                          >&#x2713;</button> </>
                          )}
                        <button type="button" id="deleteButton" 
                        onClick={(event) => handleClickDelete(toDoItem.id)}>X</button>
                </ul>
            ))}
        </div>
    )
};

export default ListView;