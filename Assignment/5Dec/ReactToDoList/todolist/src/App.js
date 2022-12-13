import "./App.css";
import InputFieldComponent from "./Components/InputFieldComponent";
import ListData from "./Components/ListData";
function App() {
  // const DataList = ["One", "Two", "Three", "Four"];
  // console.log(DataList);

  return (
    <div className="App">
      <div>React Form</div>
      <div className="todo-main">
        <InputFieldComponent />
      </div>

      {/* <div className="product">
        {DataList.map((i) => {
          return <ListData props={i} />;
        })}
      </div> */}
    </div>
  );
}

export default App;

// ================================================================== >
