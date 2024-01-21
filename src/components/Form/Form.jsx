// this is the Form Component!
// It will be used to create the form for the client to enter their data
// and interact with the website.

// Imports:
import { useState } from 'react';
import axios from 'axios'; // necessary for our post route!

// Your component should ALWAYS start with a CAPITAL letter!
function Form(props) {
    // Adding a new item to the list
    const [toDoItemValue, setToDoItemValue] = useState('');

    // function to send task to server
    const sendTaskToServer = (event) => {
        event.preventDefault(); // prevents the page from refreshing.
        console.log("hi hi from submit button");
        console.log("Task to send to server: ", toDoItemValue);

        // axios call!
        axios.post('/api/todo', {
            task: toDoItemValue
        }).then((response) => {
            // success!
            console.log("Data sent to data: ", response.data)
            // clear form after submit
            setToDoItemValue('');
            // fetch new data
            props.refreshToDoList();
        }).catch((error) => {
            console.log("axios error:", error);
            alert("There is an error in the axios.POST!")
        })
    } 

    return (
        // html markup can go into the parenthesis
        <div>
            <h1 className="App-header">TO DO APP</h1>
            <form onSubmit={sendTaskToServer}>
                <div>
                <label htmlFor="taskInput">Title: </label>
                <input id="taskInput" type="text" value={toDoItemValue}
                onChange={(e) => setToDoItemValue(e.target.value)}></input>
                {/* <p>{toDoItemValue}</p> Test to make sure toDoItemValue is what we are typing */}
                <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

// always export the component
export default Form;