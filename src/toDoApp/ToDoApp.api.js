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
}; // end of axios GET CALL

export const postToDoItem = (taskData) => {
    // axios POST Request
    // taskData = req.body
    return axios.post('/api/todo', taskData) 
        .then((response) => {
            // success
            
        })
        .catch((error) => {
            console.log("ERROR IN AXIOS POST: ", error);
        })
}