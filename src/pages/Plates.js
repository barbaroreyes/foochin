import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { PlateContext } from '../context/plates';


const Plates = () => {
    const { plates } = useContext(PlateContext);

    if (!plates.length) {
        return <h3>No Plates Available</h3>
    }

    return (
        <section className="plates">
            {plates.map(({ image: image, id, title }) => (
                <article key={id} className="plate grow shadow-5">
                    <div className="plate-image">
                        <img src={image} alt={title} />
                    </div>
                    <Link to={`plates/${id}`} className="btn bg-black book-link">ver mas</Link>
                </article>
            ))}
        </section>
    )
}

export default Plates
