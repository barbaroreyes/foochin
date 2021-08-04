import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>Martes <br />A <br />Sabados</h2>
             <h2>11 Am - 6 Pm</h2>
            <Link className="btn" to="/plates">Todos Los Platos</Link>
            <br/>
            <h3>1773 Pali Dr El Paso TX</h3>
        </section>
    )
}

export default Hero
