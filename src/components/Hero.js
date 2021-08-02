import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>El Chinchorro De Frida</h2>
            <h3>Solo Ofertamos <br />Pura Delicias </h3>
            <Link className="btn" to="/plates">Todos Los Platos</Link>
        </section>
    )
}

export default Hero
