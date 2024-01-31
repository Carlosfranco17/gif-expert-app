import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


const Gifexpertapp = () => {

  const [categories, setCategories] = useState(["One Punch", "Dragon ball"]);

  const onaddcategory = (newCategory) => {
    console.log(newCategory);

    if (categories.includes(newCategory)) return;

    // setCategories([newCategory, ...categories]);

    // setCategories.push(newCategory)

    setCategories([...categories, newCategory]);
  };

  return (
    <div>
      <h1>Gifexpertapp</h1>

      <AddCategory
        // setCategories={setCategories}

        onNewCategory={(value) => onaddcategory(value)}
      />
        {categories?.map((category) => {
          
          return <GifGrid key={category}
          category={category} />
          
        })}
   
    </div>
  );
};

export default Gifexpertapp;
