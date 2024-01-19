import { useState } from 'react';
// this is the Form Component!
// It will be used to create the form for the client to enter their data
// and interact with the website.

// Your component should ALWAYS start with a CAPITAL letter!
function Form() {
    // Adding a new item to the list
    const [toDoItemValue, setToDoItemValue] = useState([]);

    // function to send task to server
    const sendTaskToServer = (event) => {
        console.log("hi hi");
    } 

    return (
        // html markup can go into the parenthesis
        <div>
            <h1>TO DO APP</h1>
            <form onSubmit={sendTaskToServer}>
                <div>
                <label htmlFor="taskInput">Title: </label>
                <input id="taskInput" type="text" onChange={(event) => setToDoItemValue}></input>
                <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

// always export the component
export default Form;