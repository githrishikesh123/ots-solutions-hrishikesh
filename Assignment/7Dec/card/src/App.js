import "./App.css";
import CardComponent from "./Components/CardComponent";
import DataModel from "./Components/DataModel";
import { Grid, Image } from "semantic-ui-react";
function App() {
  return (
    <div className="App">
      <div className="product-model">
        <div className="product">
        {DataModel.map((i) => {
          return (
            <CardComponent
              model={i.model}
              price={i.price}
              rom={i.rom}
              screen={i.screen}
              warranty={i.warranty}
              image={i.image}
              offerPrice={i.offerPrice}
              rating={i.rating}
              reviews={i.reviews}
            />
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default App;
