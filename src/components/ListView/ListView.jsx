import { fetchToDoItems } from '../../toDoApp/ToDoApp.api.js';
import { useEffect } from 'react';

function ListView(toDoList) {
  // completed to do list

  useEffect(() => {
    console.log( "toDoList in ListView is: ", toDoList);
  }, []);

    return (
        <div>
            {toDoList.toDoList.map((toDoItem, itemIndex) => {
                return (
                <ul key={itemIndex}>
                    <li id="toDoItemTask">{toDoItem.task}</li>
                </ul>
                )
            })};
        </div>
    )
};

export default ListView;