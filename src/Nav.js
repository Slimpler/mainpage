import React from "react";
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'Black'
    };
    return (
        <nav>
            <ul className="nav-links">
                <Link style={navStyle} to='/'>
                    <li>
                        Principal
                    </li>

                </Link>
                
            </ul>
            <ul className="nav-links">
                <Link style={navStyle} to='/Menu'>
                    <li>
                        Menu
                    </li>

                </Link>
                
            </ul> 
            <ul className="nav-links">
                <Link style={navStyle} to='/Listado'>
                    <li>
                        Listado
                    </li>

                </Link>
                
            </ul> 
            <ul className="nav-links">
                <Link style={navStyle} to='/Formulario'>
                    <li>
                        Formulario
                    </li>

                </Link>
                
            </ul> 
            <ul className="nav-links">
                <Link style={navStyle} to='/Validador'>
                    <li>
                        Validador
                    </li>

                </Link>
                
            </ul>   
        </nav>

    );
  }
  
  
  export default Nav;