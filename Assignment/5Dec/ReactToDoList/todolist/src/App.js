import "./App.css";
import InputFieldComponent from "./Components/InputFieldComponent";
import ListData from "./Components/ListData";
function App() {
 
  return (
    <div className="App">
      <div>React Form</div>
      <div className="todo-main">
        <InputFieldComponent  />
      </div>
      <div className="todo-content">
        {/* <ListData/> */}
      </div>
    </div>
  );
}

export default App;



// ================================================================== >
