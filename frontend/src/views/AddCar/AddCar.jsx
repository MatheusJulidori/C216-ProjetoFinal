import './AddCar.css';
import { useState } from 'react';

const AddCar = () => {
  const [car, setCar] = useState({
    marca: '',
    modelo: '',
    ano: '',
    cor: '',
    preco: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({
      ...car,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send car data to API
    console.log('Car added:', car);
    // Clear the form
    setCar({
      marca: '',
      modelo: '',
      ano: '',
      cor: '',
      preco: ''
    });
  };

  return (
    <div className="add-car-container">
      <h1>Adicionar Carro</h1>
      <form className="add-car-form" onSubmit={handleSubmit}>
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
        <button type="submit">Adicionar Carro</button>
      </form>
    </div>
  );
};

export default AddCar;