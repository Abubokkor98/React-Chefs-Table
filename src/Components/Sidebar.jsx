import React from 'react'

export default function Sidebar({
  recipeQueue,
  handleRemoveRecipe,
  prepareRecipe,
  calculateTimeAndCalories,
  totalTime,
  totalCalories
}) {

  return (
    <div className='md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100'>
      {/* want to cook table */}
      <div className="overflow-x-auto">
        <h2 className='border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center pb-2'>Want To Cook: {recipeQueue.length}</h2>
  <table className="table">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        recipeQueue.map((recipe,index)=>
        <tr key={index} className="hover">
        <th>{index + 1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time}</td>
        <td>{recipe.calories}</td>
        <td><button onClick={()=>{handleRemoveRecipe(recipe.recipe_id)
          calculateTimeAndCalories(recipe.preparing_time, recipe.calories)
        }} className="bg-green-400 rounded-full text-sm text-gray-800 font-medium px-4 py-2">Preparing</button></td>
      </tr>)
      }

      
    </tbody>
  </table>
      </div>
      {/* currently cooking table */}
      <div className="overflow-x-auto mt-8">
        <h2 className='border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center pb-2'>Currently Cooking: {prepareRecipe.length}</h2>
  <table className="table">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
      {
        prepareRecipe.map((recipe,index)=>
        <tr key={index} className="hover">
        <th>{index + 1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time}</td>
        <td>{recipe.calories}</td>
      </tr>)
      }
      <tr className='border-none'>
      <th></th>
        <td></td>
        <td className='font-semibold text-gray-600'>Total Time = {totalTime}</td>
        <td className='font-semibold text-gray-600'>Total Calories = {totalCalories}</td>
      </tr>

      
    </tbody>
  </table>
      </div>
    </div>
  )
}
