import axios from 'axios'; // import axios

export const fetchToDoItems = () => {
    // axios GET CALL
    return axios.get('/api/todo')
        // .then((response) => {
        //     console.log('SERVER DATA: ', response);
        // })
        // .catch((error) => {
        //     console.log('ERROR IN AXIOS GET: ', error);
        // });
}; // end of axios GET call

// PUT (UPDATE) Axios Call
// export const markAsCompleted = () => {

// }

// Delete Axios Call
export const deleteToDoItem = (toDoItemId) => {
    return axios.delete(`/api/todo/${toDoItemId}`);
}; // End of axios DELETE Call