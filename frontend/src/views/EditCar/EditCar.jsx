import { useState, useEffect } from 'react';
import './EditCar.css';
import PropTypes from 'prop-types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const EditCar = ({ carToEdit, onSave }) => {
  const [car, setCar] = useState({
    id: '',
    marca: '',
    modelo: '',
    ano: '',
    cor: '',
    preco: ''
  });

  useEffect(() => {
    if (carToEdit) {
      setCar(carToEdit);
    }
  }, [carToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({
      ...car,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/carro/${car.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(car)
      });
      if (response.ok) {
        console.log('Car edited:', car);
        onSave(car);
      } else {
        console.error('Error editing car:', response.statusText);
      }
    } catch (error) {
      console.error('Error editing car:', error);
    }
  };

  return (
    <div className="edit-car-container">
      <h1>Editar Carro</h1>
      <form className="edit-car-form" onSubmit={handleSubmit}>
        <label>
          Marca:
          <input type="text" name="marca" value={car.marca} onChange={handleChange} required />
        </label>
        <label>
          Modelo:
          <input type="text" name="modelo" value={car.modelo} onChange={handleChange} required />
        </label>
        <label>
          Ano:
          <input type="text" name="ano" value={car.ano} onChange={handleChange} required />
        </label>
        <label>
          Cor:
          <input type="text" name="cor" value={car.cor} onChange={handleChange} required />
        </label>
        <label>
          Preço:
          <input type="text" name="preco" value={car.preco} onChange={handleChange} required />
        </label>
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
};

EditCar.propTypes = {
  carToEdit: PropTypes.shape({
    id: PropTypes.number.isRequired,
    marca: PropTypes.string.isRequired,
    modelo: PropTypes.string.isRequired,
    ano: PropTypes.string.isRequired,
    cor: PropTypes.string.isRequired,
    preco: PropTypes.string.isRequired
  }).isRequired,
  onSave: PropTypes.func.isRequired
};

export default EditCar;