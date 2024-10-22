import React from 'react'

export default function Sidebar({recipeQueue}) {
  console.log(recipeQueue);
  return (
    <div className='md:w-1/3'>
      Want to cook: {recipeQueue.length}
    </div>
  )
}
