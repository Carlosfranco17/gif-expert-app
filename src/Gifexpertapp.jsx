import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

const Gifexpertapp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon ball'])

    const onaddcategory =()=>{
        setCategories([...categories,'hola'])
    }


  return (
    <div>
        
<h1>Gifexpertapp</h1>

<AddCategory  setCategories={setCategories}/>

<button onClick={onaddcategory}>agregar</button>

<ol>
{
    categories.map(category=>{
    
    return <li key={category }>{category}</li>})
}

</ol>

    </div>
  )
}

export default Gifexpertapp