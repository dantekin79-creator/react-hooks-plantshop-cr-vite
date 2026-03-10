import React, { useState } from "react";

function NewPlantForm({ addPlant }) {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  // Handler to update form data on input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handler for form submission: POST to backend and add to state
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Send form data as is
    })
      .then((r) => r.json())
      .then((newPlant) => {
        addPlant(newPlant); // Add new plant to parent state
        setFormData({ name: "", image: "", price: "" }); // Reset form
      });
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
