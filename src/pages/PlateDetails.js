import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { PlateContext } from "../context/plates";
import { CartContext } from "../context/cart";

const PlateDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { plates } = useContext(PlateContext);
  const { addToCart } = useContext(CartContext);

  const plate = plates.find((plate) => {
    return plate.id === id;
  });
  if (!plate) {
    return <h3>Loading...</h3>;
  }

  const { image: url , name, description, own, price } = plate;

  return (
    <section className="book-details">
      <div className="detail-image">
        <img src={url} alt="10x Rule" />
      </div>
      <div className="detail-description">
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>{own}</h3>
        <h4>Price - $ {price}</h4>
        <button
          className="btn"
          onClick={() => {
            addToCart({ ...plate, id });
            history.push("/cart");
          }}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default PlateDetails;
