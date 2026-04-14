import React from "react";

function PlantCard({ plant, onUpdatePlant }) {
  const { id, name, image, price } = plant;
  const inStock = plant.inStock ?? true;

  const handleToggleStock = () => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inStock: !inStock,
      }),
    }).then(() => {
      onUpdatePlant({ ...plant, inStock: !inStock });
    });
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button
        className={inStock ? "primary" : ""}
        onClick={handleToggleStock}
      >
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;