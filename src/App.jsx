import React from 'react'
import Header from './Components/Header'
import Banner from './Components/Banner'
import OurRecipes from './Components/OurRecipes'
import Recipes from './Components/Recipes'
import Sidebar from './Components/Sidebar'

export default function App() {
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
        <Recipes></Recipes>
        {/* Sidebar */}
        <Sidebar></Sidebar>

      </section>

    </div>
  )
}
