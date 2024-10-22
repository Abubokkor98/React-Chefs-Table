import React, { useState } from 'react'
import Header from './Components/Header'
import Banner from './Components/Banner'
import OurRecipes from './Components/OurRecipes'
import Recipes from './Components/Recipes'
import Sidebar from './Components/Sidebar'

export default function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);

  const handleAddToRecipeQueue = (recipe) => {
    const isExist = recipeQueue.find(
      previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)
      if(isExist){
        alert('Recipe is already exist in the queue')
      }
      else{
        setRecipeQueue([...recipeQueue, recipe])
      }
  }


  return (
    <div className='max-w-screen-xl mx-auto px-4'>
      {/* Header Section */}
      <Header></Header>
      {/* Banner Section */}
      <Banner></Banner>
      {/* Our Recipes Section */}
      <OurRecipes></OurRecipes>
      {/* Recipe Cards Section */}
      <section className='flex flex-col md:flex-row gap-6'>
        {/* Cards section */}
        <Recipes handleAddToRecipeQueue={handleAddToRecipeQueue}></Recipes>
        {/* Sidebar */}
        <Sidebar recipeQueue={recipeQueue}></Sidebar>

      </section>

    </div>
  )
}
