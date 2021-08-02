import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

import { PlateContext } from "../context/plates";

const Home = () => {
    const { featured } = useContext(PlateContext);
    if (!featured.length) {
        return <h3>No Featured Books</h3>
    }
    return (
        <>
            <Hero />
            <section className="featured">
                <header className="featured-head">
                    <h3 className="especiales">Especiales</h3>
                </header>
                <div className="books featured-list">
                    {featured.map(({ id, image, name }) => (
                        <article key={id} className="book featured-book grow ">
                            <div className="book-image">
                                <img src={image} alt={name} />
                            </div>
                            
                            <h1>{name}</h1>
                            <Link to={`plates/${id}`} className="btn bg-black book-link">details</Link>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home;