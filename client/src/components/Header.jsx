import React from "react";
import { NavLink , Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header-2">
        <nav className="bg-white py-2 md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">

            <div className="flex justify-between items-center">
              <a href="#" className="font-bold text-xl text-indigo-600">Kisan Network</a>
            </div>
            <div className="flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
              <NavLink to="/"  className="p-2 lg:px-4 md:mx-2 text-black rounded " activeClassName="bg-green-500 text-white">Home</NavLink>
              <Link to="/contact"  className="p-2 lg:px-4 md:mx-2 text-black rounded " activeClassName="bg-green-500 text-white">Contacts</Link>
              <NavLink to="/create"  className="p-2 lg:px-4 md:mx-2 text-black rounded " activeClassName="bg-green-500 text-white">Create Contact</NavLink>
              <NavLink to="/history"  className="p-2 lg:px-4 md:mx-2 text-black rounded " activeClassName="bg-green-500 text-white">Message History</NavLink>
            </div>
          </div>
          </nav>
      </div>
    )
}

export default Header;