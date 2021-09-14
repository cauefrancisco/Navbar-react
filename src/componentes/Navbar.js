import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
       
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                    Quarto188 <i class="fas fa-book-reader" />
                    <h6>
                        Meus projetos literários
                    </h6>
                    </Link>
                </div>
             </nav>
        
    )
}

export default Navbar
