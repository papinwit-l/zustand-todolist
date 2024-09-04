import React from "react";

function NavBar() {
  return (
    <div className="flex justify-between bg-slate-500">
      <div className="flex items-center">Logo</div>
      <nav className="flex gap-2 px-2">
        <a href="#" className="btn btn-info">
          Home
        </a>
        <a href="#" className="btn btn-info">
          About
        </a>
        <a href="#" className="btn btn-info">
          Login
        </a>
      </nav>
    </div>
  );
}

export default NavBar;
