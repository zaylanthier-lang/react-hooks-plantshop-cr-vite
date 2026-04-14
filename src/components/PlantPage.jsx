import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  const handleAddPlant = (newPlant) => {
    setPlants((currentPlants) => [...currentPlants, newPlant]);
  };

 const handleUpdatePlant = (updatedPlant) => {
  setPlants((plants) =>
    plants.map((plant) =>
      plant.id === updatedPlant.id
        ? { ...plant, inStock: updatedPlant.inStock }
        : plant
    )
  );
};

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search search={search} onSearchChange={setSearch} />
      <PlantList plants={filteredPlants} onUpdatePlant={handleUpdatePlant} />
    </main>
  );
}

export default PlantPage;