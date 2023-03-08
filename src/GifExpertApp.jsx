import { useState } from "react";
import { AddCattegory } from "./components/AddCattegory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {

      if (categories.includes(newCategory)) return;

      // categories.push('Naruto Shippuden');  EVITAR USAR, SE USA PARA MUTAR UN OBJETO, UN ESTADO
      // setCategories(['Naruto Shippuden', ...categories])
      // setCategories(cat => [...cat, 'Naruto Shippuden'])
      setCategories([newCategory, ...categories])
    }

  return (
    <>
    <h1>GifExpertApp</h1>

    <AddCattegory 
    // setCategories = {setCategories} 
    onNewCategory = {(event)=> onAddCategory(event)}
    />

        {
          categories.map( (category) => (
          <GifGrid 
          key={category}
          category={category} />
          ))
        }
    </>
  )
}
