import { useState } from "react";

export const GifExpertApp=()=> {

const [categories, setCategories] = useState(['One Punch', 'Naruto']);

const onAddCategory =()=>{

    setCategories([ 'Valorant',...categories,]);

}
  return (
    <>
        {/*titulo*/}
        <h1>
            GifExpertApp
        </h1>
        {/*input*/}
        
        
        {/*listado de gif*/}
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
            {categories.map(category=>{
                return <li key={category}>{category}</li>
            })
            }

        </ol>
            {/*gif item*/}
    </>
  )
}
