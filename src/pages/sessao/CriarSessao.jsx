import React, { useState } from "react";
import Notification from '../../components/Notification';

const CriarSessao = () => {

  const [notification, setNotification] = useState(null);

  const [formData, setFormData] = useState({
    movieId: "",
    roomId: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    const isSuccess = Math.random() > 0.5; // Temos que tirar isso depois

    if (isSuccess) {
      setNotification({ type: 'success', message: 'Sessão adicionada com sucesso!' });
    } else {
      setNotification({ type: 'error', message: 'Erro ao adicionar a sessão. Tente novamente.' });
    }

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div className="main-content">
      {notification && <Notification type={notification.type} message={notification.message} />}
      <form onSubmit={handleSubmit}>
        <h1>Adicionar Sessão</h1>
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
            type="datetime-local"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CriarSessao;
