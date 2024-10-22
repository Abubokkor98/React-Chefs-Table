import React from 'react'

export default function Recipe({recipe, handleAddToRecipeQueue}) {
    const {recipe_name, recipe_image, short_description, ingredients, preparing_time, calories} = recipe;
  return (
    <div>
        <div className="card card-compact bg-base-100  border-2">
         <figure className='px-8 pt-6'>
           <img
           className='h-52 w-full rounded-md'
            src={recipe_image}
            alt="Shoes" />
          </figure>
         <div className="card-body">
             <h2 className="card-title text-xl text-gray-800 font-semibold">{recipe_name}</h2>
              <p className='text-gray-600 text-base'>{short_description}</p>
            <h3 className='text-lg text-gray-800 font-medium'>Ingredients: {ingredients.length}</h3>
            <ul className='ml-8'>
                {
                    ingredients.map((ingredient, index)=><li className='list-disc text-gray-600 ' key={index}>{ingredient}</li>)
                }
            </ul>
            <div className='flex'>
                <div className='flex items-center'><i className="fa-regular fa-clock mr-2"></i></div>
                <p>{preparing_time} minutes</p>
                <div className='flex items-center'><i className="fa-solid fa-fire-flame-curved mr-2"></i></div>
                <p>{calories} calories</p>
                
            </div>
            <div className="card-actions">
              <button className="btn bg-green-400 rounded-full px-8 text-xl text-gray-800 mt-6 font-medium" onClick={()=>handleAddToRecipeQueue(recipe)}>Want To Cook</button>
           </div>
         </div>
      </div>
   </div>
  )
}
