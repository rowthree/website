import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>Momru</div>
        <nav>
          <ul>
            <li>
              <a href='/'>Hamburger university</a>
            </li>
            <li className='btn'>
              <a href='/'>Buy now</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
