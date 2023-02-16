// import ToDoComponent from './components/ToDoComponent';
import { Checkbox, Icon, Input, Button } from "semantic-ui-react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
// import todo from "../../api/models/todo";

function App() {
  const [allToDo, setAllToDo] = useState([]);
  const [description , setDescription] = useState()
  // ------------------------------------------------------------------ 
  const addToList=async()=>{
    // console.log("added")
    const response = await axios.post("http://localhost:5000/todo/add" , {
      data:{description:description}
    });
    // console.log(response.data);
    // setAllToDo(response.data);
    console.log(description)
  }

  const handlechange=(e)=>{
    setDescription(e.target.value)
  }
  // ----------------------------------------------------------------------------------------
  const getAllToDo = async () => {
    const response = await axios.get("http://localhost:5000/todo");
    console.log(response.data);
    setAllToDo(response.data);
    
  };

  // --------------------------------------------------------------------------------------
  const deleteList = async (dataId) => {
    
    const response = await axios.delete(
      `http://localhost:5000/todo/delete/${dataId}`
    );
    if(response.data.deletedCount === 1){
      const filteredToDo = allToDo.filter((todo)=>{
        if(todo._id === dataId){
          return false
        }
        return true;
      });
      setAllToDo(filteredToDo)
    }
  };
  // ----------------------------------------------------------------------------------
  const updateTodo = async (dataId) => {
    const response = await axios.patch(
      `http://localhost:5000/todo/edit/${dataId}`
    );
    if (response.status == "200") {
      const updatedTodos = allToDo.map((todo) => {
        if (todo._id == dataId) {
          todo.completed = response.data.completed;
        }
        return todo;
      });
      setAllToDo(updatedTodos);
    }
  };

  // -------------------------------
  useEffect(() => {
    getAllToDo();
  }, []);

  return (
    <div className="App">
      <h1 className="text-center">Essentials List</h1>
      <hr />
      {/* ----------------------------------------------------  */}
      <div>
        <div  >
        <input type="text" name="description" value={description} placeholder="Add To List" onChange={handlechange} />
        <Button onClick={addToList} primary>Add</Button>
        </div>
      </div>
      {/* ----------------------------------------------------  */}
      <ul className="todolist">
        {allToDo.map((data) => (
          // <div className="todolist" >

          <li key={data._id}>
            <span className={data.completed ? "done" : "undone"}>
              {data.description}
            </span>
            <span className="trashbox">
              <Icon
                onClick={() => deleteList(data._id)}
                name="trash alternate outline"
              ></Icon>
            </span>
            <span className="checkbox">
              <Checkbox
                slider
                checked={data.completed}
                onClick={() => updateTodo(data._id)}
              />
            </span>
          </li>

          // </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
