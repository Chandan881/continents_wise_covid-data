import React from 'react';
import './Navbar.css';


const Navbar = () => {
    return (
        <div className='nav'>
           <a className='navlinks txs' href="/livepath">VACCOVID<span className='hilite'>.LIVE</span></a>
           <a className='navlinks xx' href="/covid">COVID-19</a>
           <a className='navlinks xx' href="/VACCINE">VACCINE</a>
           <a className='navlinks xx' href="/TREATMENT">TREATMENT</a>
           <a className='navlinks xx' href="/MAP">MAP</a>
           <a className='navlinks xx' href="/NEWS">NEWS</a>
           <a className='navlinks xx' href="/ABOUT">ABOUT</a>
           <a className='navlinks txe' href="/buy"> Buy us a coffee</a>
           
        </div>
    )
}

export default Navbar;
