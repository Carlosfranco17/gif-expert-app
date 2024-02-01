import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState("One Punch");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);

    // console.log(target.value);
  };

  const onSubmit=(event)=>{
    event.preventDefault();
    console.log(inputValue);

    if(inputValue.trim().length<=1)return;

    // setCategories((categories=>[...categories,inputValue]));
    setInputValue('')
    onNewCategory(inputValue.trim())
    
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifts"
        value={inputValue}
        onChange={onInputChange}
      / >
   </form>
  );
};
