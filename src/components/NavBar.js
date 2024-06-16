import React from 'react';
import { useState } from 'react';
import styles from "./NavBar.module.css";
import logo from "../assets/img/logo.svg";
import {Example} from "./AnimatedHamburgerButton";


function NavBar() {

    return (
        <header>
            <nav>
                    <h1 className="text-white">Ca Heitz!</h1>
                
                    
                    <Example />
               
                    
                
            </nav>
        </header>
    );
}

export default NavBar
