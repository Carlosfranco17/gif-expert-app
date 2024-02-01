import React, { useEffect } from "react";
import { getgifs } from "../helpers/getGif";

const GifGrid = ({ category }) => {
 
  useEffect(() => {
    
    getgifs(category)  ;
  
  
  }, [])
  

  return (
    <div>
      <h3>{category}</h3>
<ol>
  
  
  </ol>   
  
  
   </div>
  );
};

export default GifGrid;
