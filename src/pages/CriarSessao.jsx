import React, { useState } from "react";

const MovieForm = () => {
  const [formData, setFormData] = useState({
    movieId: "",
    roomId: "",
    date: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Aqui você pode adicionar a lógica para enviar os dados
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="movieId">ID do Filme:</label>
        <input
          type="text"
          id="movieId"
          name="movieId"
          value={formData.movieId}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="roomId">ID da Sala:</label>
        <input
          type="text"
          id="roomId"
          name="roomId"
          value={formData.roomId}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Data:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default MovieForm;
