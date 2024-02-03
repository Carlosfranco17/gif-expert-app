import React, { useEffect, useState } from "react";
// import { getgifs } from "../helpers/getGif";
import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {


  const {images, isLoading}=useFetchGifs(category)

  console.log({images,isLoading})
  

  // const [images, setImages] = useState([]);

  // const getImages = async () => {
  //   const newImages = await getgifs(category);
  //   setImages(newImages);
  // };

  // useEffect(() => {
  //   // getgifs(category);
  //   getImages();
  // }, []);





  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
