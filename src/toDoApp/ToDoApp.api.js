import axios from 'axios'; // import axios

export const fetchToDoItems = () => {
    // axios GET CALL
    return axios.get('/api/todo')
}; // end of axios GET call

// AXIOS POST CALL IS IN THE FORM.JSX file!

// Delete Axios Call
export const deleteToDoItem = (toDoItemId) => {
    return axios.delete(`/api/todo/${toDoItemId}`);
}; // End of axios DELETE Call

// PUT (UPDATE) Call
export const updateCompleteToDoItem = (toDoItemId) => {
    return axios.put(`/api/todo/${toDoItemId}`)
}; // End of axios PUT call