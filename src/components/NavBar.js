import React from "react";
// import Rick_and_Morty from "./../assets/Rick_and_Morty";
import { Link, NavLink } from "react-router-dom";
function NavBar() {
  return (
    <div className="bg-green-500 w-full p-5">
      <ul className="flex text-white justify-between">
        <li className="text-xl">Rick and Morty</li>
        <div className="flex justify-between items-center">
          <li className="mr-2 text-lg">
            <NavLink to="/">Home</NavLink>
          </li>
          <form className="">
            <input
              className="rounded p-1"
              type="text"
              name="search"
              placeholder="Buscar"
            />
            <input
              type="submit"
              value="Buscar"
              className="bg-purple-400 mx-1 rounded p-1"
            />
          </form>
        </div>
      </ul>
    </div>
  );
}

export default NavBar;
