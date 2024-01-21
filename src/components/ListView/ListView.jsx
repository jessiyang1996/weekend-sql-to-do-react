import { deleteToDoItem, updateCompleteToDoItem } from '../../toDoApp/ToDoApp.api.js'
import './ListView.module.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

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
                <ul key={itemIndex} id="toDoList">
                        {toDoItem.completed ?(
                        <div id="taskCompletedDiv">
                        {/* Task is completed */}
                        <li id="toDoItemTask" className="crossedThrough">{toDoItem.task}</li>
                        {/* <p>task completed? {toDoItem.completed ? 'TRUE' : 'FALSE'}</p> */}
                        <Button type="button" id="completed" variant="outlined" size="small"
                          onClick={() => handleCompletedTask(toDoItem.id)}
                          >&#x2713;</Button> 
                        <Button type="button" id="deleteButton" variant="outlined" size="small" startIcon={<DeleteIcon />}
                        onClick={(event) => handleClickDelete(toDoItem.id)}>Delete</Button>
                        </div>):
                        // Task NOT completed:
                        (<div id="taskNotCompletedDiv"> <li id="toDoItemTask" className="notCompleted">{toDoItem.task}</li>
                        {/* <p>task completed? {toDoItem.completed ? 'TRUE' : 'FALSE'}</p> */}
                        <Button type="button" id="completed" variant="outlined" size="small"
                          onClick={() => handleCompletedTask(toDoItem.id)}
                          >&#x2713;</Button> 
                          <Button type="button" id="deleteButton" variant="outlined" size="small" startIcon={<DeleteIcon />}
                        onClick={(event) => handleClickDelete(toDoItem.id)}>Delete</Button>
                          </div>
                          )}
                </ul>
            ))}
        </div>
    )
};

export default ListView;