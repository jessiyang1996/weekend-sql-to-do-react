// this is the Form Component!
// It will be used to create the form for the client to enter their data
// and interact with the website.

// Your component should ALWAYS start with a CAPITAL letter!
function Form() {
    return (
        // html markup can go into the parenthesis
        <form>
            <div>
            <label htmlFor="titleInput">Title: </label>
            <input id="titleInput" type="text"></input>
            </div>
            <div>
            <label htmlFor="descriptionInput">Description: </label>
            <input id="descriptionInput"type="text"></input>
            <button>Submit</button>
            </div>
        </form>
    );
}

// always export the component
export default Form;