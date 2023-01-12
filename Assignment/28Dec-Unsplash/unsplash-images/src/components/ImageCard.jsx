import React from "react";

const ImageCard = ({ imageAll }) => {
  console.log(imageAll);
  // console.log(imageAll.results)
  return (
    <>
      <div>ImageCard</div>
      <div>
        {imageAll.map((i) => {
          return (
            <div>
              <img src={i.urls.regular} alt="" style={{ width: "354px" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageCard;
