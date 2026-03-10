import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // State for storing the list of plants fetched from the backend
  const [plants, setPlants] = useState([]);
  // State for search query to filter plants
  const [search, setSearch] = useState("");

  // useEffect hook to fetch plants from the backend on component mount
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPlants(data);
        } else {
          console.error("Fetched data is not an array:", data);
        }
      })
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  // Filter plants based on search query (case-insensitive)
  const filteredPlants = (plants || []).filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  // Function to add a new plant to the state (called after successful POST)
  const addPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  return (
    <main>
      {/* Form to add new plants */}
      <NewPlantForm addPlant={addPlant} />
      {/* Search bar to filter plants by name */}
      <Search search={search} setSearch={setSearch} />
      {/* List of plants, filtered by search */}
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
