import React, { useState } from 'react'
import Header from './Components/Header'
import Banner from './Components/Banner'
import OurRecipes from './Components/OurRecipes'
import Recipes from './Components/Recipes'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'

export default function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [prepareRecipe, setPrepareRecipe] = useState([]);
  // state for calculate function
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  

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

  const handleRemoveRecipe = (id)=>{
    // find which recipe to remove
    const deletedRecipe = recipeQueue.find(recipe=>recipe.recipe_id === id);
    // remove from want to cook table
    const updatedQueue = recipeQueue.filter(recipe=>recipe.recipe_id !== id);
    setRecipeQueue(updatedQueue);
    setPrepareRecipe([...prepareRecipe,deletedRecipe])
  }

  const calculateTimeAndCalories = (time, calories) =>{
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);
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
        <Sidebar recipeQueue={recipeQueue}
        handleRemoveRecipe={handleRemoveRecipe}
        prepareRecipe={prepareRecipe}
        calculateTimeAndCalories={calculateTimeAndCalories}
        totalTime={totalTime}
        totalCalories={totalCalories}
        ></Sidebar>
      </section>
      {/* Footer Section */}
      <Footer></Footer>

    </div>
  )
}
