// this is the Form Component!
// It will be used to create the form for the client to enter their data
// and interact with the website.

// Your component should ALWAYS start with a CAPITAL letter!
function Form() {
    return (
        // html markup can go into the parenthesis
        <form>
            <div>
            <label htmlFor="taskInput">Title: </label>
            <input id="taskInput" type="text"></input>
            </div>
        </form>
    );
}

// always export the component
export default Form;