import {useState} from 'react';
// require('')
import Form from '../Form/Form.jsx';
import axios from 'axios'; // import axios in order to use it!

// a function represents a component!
function App () {
  const [toDoList, setToDoList] = useState([
    {
      title: 'Go to Office Hours',
      description: 'Office Hours are at 5PM-6PM'},
    {
      title: 'Go to work',
      description: '7:45AM - 4:30PM',
    }
  ]);

  // GET ROUTE
  const getAppList = () => {
    axios.get('/api/todo')
      .then((response) => {
        console.log(response.data);
        setToDoList(response.data);
      })
      .catch((error) =>{
        console.log("error in GET /api/todo", error);
        alert('Something went wrong!');
      })
  };

  return (
    <div>
      <h1>TO DO APP</h1>
      <Form />
      <ul>
        {
          toDoList.map((toDo) => {
            return <li key={toDo.title}>{toDo.title}</li>
          })
        }
      </ul>
    </div>
  );

}

export default App
