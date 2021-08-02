import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>Delicias</h2>
            <h3>Sabor <br />Identidad </h3>
            <Link className="btn" to="/plates">Todos Los Platos</Link>
        </section>
    )
}

export default Hero
