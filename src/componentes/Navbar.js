import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';


function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [button, setButton] = useState(true)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                    Quarto188 <i class="fas fa-book-reader" />
                    <h6>
                        Meus projetos literários
                    </h6>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/textos' className='nav-links' onClick={closeMobileMenu}>
                                Textos
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/ebooks' className='nav-links' onClick={closeMobileMenu}>
                                Ebooks
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign-up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--ouline'>SIGN UP</Button>}
                </div>
             </nav>
        </>
    )
}

export default Navbar
