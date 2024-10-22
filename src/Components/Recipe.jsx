import React from 'react'

export default function Recipe({recipe}) {
    console.log(recipe);
    const {recipe_name, recipe_image, short_description, ingredients, preparing_time, calories} = recipe;
  return (
    <div>
        <div class="card card-compact bg-base-100 shadow-xl">
         <figure className='px-8 pt-6'>
           <img
           className='h-52 w-full rounded-md'
            src={recipe_image}
            alt="Shoes" />
          </figure>
         <div class="card-body">
             <h2 class="card-title text-lg text-gray-800 font-medium">{recipe_name}</h2>
              <p className='text-gray-600 text-base'>{short_description}</p>
            <h3 className='text-lg text-gray-800 font-medium'>Ingredients: {ingredients.length}</h3>
            <ul className='ml-8'>
                {
                    ingredients.map((ingredient, index)=><li className='list-disc text-gray-600 ' key={index}>{ingredient}</li>)
                }
            </ul>
            <div className='flex gap-4'>
                <div className='flex items-center'><i className="fa-regular fa-clock"></i></div>
                
            </div>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
           </div>
         </div>
      </div>
   </div>
  )
}
