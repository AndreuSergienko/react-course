import React from "react";
import header from './Header.module.css'

const Header = () => {
   return (
      <header className={header.header}>
         <a href="#home" className={header.logo}>
            Logo
         </a>
      </header>
   )
}

export default Header