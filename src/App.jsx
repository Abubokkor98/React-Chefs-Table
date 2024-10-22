import React from 'react'
import Header from './Components/Header'
import Banner from './Components/Banner'
import OurRecipes from './Components/OurRecipes'

export default function App() {
  return (
    <div className='max-w-screen-xl mx-auto px-4'>
      {/* Header Section */}
      <Header></Header>
      {/* Banner Section */}
      <Banner></Banner>
      {/* Our Recipes Section */}
      <OurRecipes></OurRecipes>

    </div>
  )
}
