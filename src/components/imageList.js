import React from "react";
import './ImageList.css';
import ImageCard from './ImageCard';
const ImageList = (props) => {
  const imagesList = props.images;
  console.log(imagesList);
  const images = imagesList.map((image) => {
    return <ImageCard  key={image.id} image={image}  />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
