import axios from 'axios'; // import axios

export const fetchToDoItems = () => {
    // axios GET CALL
    return axios.get('/api/todo')
        // .then((response) => {
        //     console.log('SERVER DATA: ', response);
        // })
        // .catch((error) => {
        //     console.log('ERROR IN GET: ', error);
        // });
}; // end of axios GET CALL