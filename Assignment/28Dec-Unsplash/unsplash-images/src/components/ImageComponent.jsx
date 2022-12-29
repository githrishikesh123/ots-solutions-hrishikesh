import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ImageCard from "./ImageCard";
// ("https://api.unsplash.com/photos/?client_id=24G5eMPMjsmOjOba4S0EJLQoc8Q6QHA13B0K4K8sYNQ");
const ImageComponent = () => {
  const [image, setImage] = useState([]);
  const [search,setSearch]= useState('')
//   `https://api.unsplash.com/photos/?client_id=${API_KEY_IMAGES}&query=hotel`
  
  const getImages = async () => {
    try {
      const resp = await axios.get(`https://api.unsplash.com/search/photos/?query=${search}&client_id=${'24G5eMPMjsmOjOba4S0EJLQoc8Q6QHA13B0K4K8sYNQ'}`);
    const data = await resp.data;
      setImage(data.results)
    } catch (err) {
      console.error(err);
    }
  };
  console.log(image)
  console.log(search)

  useEffect(() => {
    getImages();
  }, [search]);
  return (
    <>
      <div>ImageComponent</div>
      <div className="App">
        <input type="text" onChange={(e)=>{setSearch(e.target.value)}}/>
      </div>
      <div>
        <ImageCard imageAll={image} />
      </div>
    </>
  );
};

export default ImageComponent;
