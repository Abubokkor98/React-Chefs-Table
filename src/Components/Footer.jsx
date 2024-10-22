import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer class="bg-gray-800 text-white py-6 mt-8 rounded-t-lg">
  <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row justify-between items-center">
     
      <div class="mb-4 md:mb-0">
        <h1 class="text-xl font-semibold">Cooking Mastery</h1>
      </div>
      
     
      <div class="flex space-x-6">
        <a href="#" class="text-gray-300 hover:text-white">Home</a>
        <a href="#" class="text-gray-300 hover:text-white">About</a>
        <a href="#" class="text-gray-300 hover:text-white">Classes</a>
        <a href="#" class="text-gray-300 hover:text-white">Contact</a>
      </div>
      
     
      <div class="mt-4 md:mt-0">
        <div class="">
          <a href="#" class="text-gray-300 hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.04c-5.5 0-9.95 4.45-9.95 9.96 0 4.4 2.86 8.16 6.8 9.49.5.09.68-.22.68-.49v-1.73c-2.78.6-3.36-1.33-3.36-1.33-.46-1.15-1.14-1.46-1.14-1.46-.93-.63.07-.62.07-.62 1 .07 1.54 1.04 1.54 1.04.92 1.58 2.41 1.13 3 .87.09-.66.36-1.13.65-1.39-2.22-.25-4.56-1.1-4.56-4.89 0-1.08.39-1.96 1.03-2.66-.1-.25-.45-1.26.1-2.62 0 0 .85-.27 2.8 1.02a9.74 9.74 0 015.09 0c1.95-1.3 2.8-1.02 2.8-1.02.55 1.36.2 2.37.1 2.62.64.7 1.03 1.58 1.03 2.66 0 3.8-2.35 4.64-4.59 4.88.37.32.7.96.7 1.93v2.86c0 .28.18.58.7.49A9.96 9.96 0 0022 12a9.96 9.96 0 00-10-9.96z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    
    <div class="text-center mt-6">
      <p class="text-gray-400">© 2024 Cooking Mastery. All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>
  )
}
