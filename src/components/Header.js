import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="header-container">
            <img className="logo" src = "https://foochinfc1cd0cfacea4ccea0ccc60fa3e20f1515410-dev.s3.amazonaws.com/public/images/Elchinchorro.png" alt="#" />
            <h1 className="log-text">El Chinchorro De Frida</h1>
             
                <div className='navigation'>
                
                        <Link to="/">Home</Link>
                    
                    
                        <Link to="/plates">Ofertas</Link>
                    
                    
                        <Link to="/cart">Cart</Link>
                
                    
                        <Link to="/checkout">Checkout</Link>
            
                </div>
           
        </header>
    )
}

export default Header
