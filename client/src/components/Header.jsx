import React from "react";

const Header = () => {
    return (
        <div class="header-2">
        <nav class="bg-white py-2 md:py-4">
          <div class="container px-4 mx-auto md:flex md:items-center">

            <div class="flex justify-between items-center">
              <a href="#" class="font-bold text-xl text-indigo-600">Kisan Network</a>
            </div>
            <div class="flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
              <a href="#" class="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Home</a>
              <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">About</a>
              <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Features</a>
            </div>
          </div>
          </nav>
      </div>
    )
}

export default Header;