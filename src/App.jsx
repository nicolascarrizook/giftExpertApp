import React, { useState } from 'react';
import { GifGrid } from './components';
import AddCategory from './components/AddCategory';


const App = () => {

  const [ categories, setCategories ] = useState([]);

  const onAddCategory = (value) => {
    if (categories.includes(value)) { 
      alert("La categoria ya existe");
      return;
    }
    setCategories ([value, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
        onNewCategory={ (value) => onAddCategory(value) }
      />
        {
          categories.map( (category) => (
            <GifGrid key={category} category={category} />
          ))
        }
    </>
  )
}

export default App;