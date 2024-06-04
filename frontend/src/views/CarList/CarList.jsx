import './CarList.css';
import { useState, useEffect } from 'react';
import EditCar from '../EditCar/EditCar';
import Swal from 'sweetalert2';


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [carToEdit, setCarToEdit] = useState(null);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/carro`);
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  const handleEditClick = (car) => {
    setCarToEdit(car);
  };

  const handleDeleteClick = (carId) => {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, delete!',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await fetch(`${API_BASE_URL}/carro/${carId}`, {
            method: 'DELETE'
          });
          setCars(cars.filter(car => car.id !== carId));
          Swal.fire('Deletado!', 'O carro foi deletado.', 'success');
        } catch (error) {
          console.error('Error deleting car:', error);
        }
      }
    });
  };

  const handleSave = async (updatedCar) => {
    try {
      const response = await fetch(`${API_BASE_URL}/carro/${updatedCar.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedCar)
      });
      if (response.ok) {
        setCars(cars.map(car => (car.id === updatedCar.id ? updatedCar : car)));
        setCarToEdit(null);
      } else {
        console.error('Error updating car:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating car:', error);
    }
  };

  return (
    <div className="car-list-container">
      {carToEdit ? (
        <EditCar carToEdit={carToEdit} onSave={handleSave} />
      ) : (
        <>
          <h1>Lista de Carros</h1>
          <table className="car-table">
            <thead>
              <tr>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Ano</th>
                <th>Cor</th>
                <th>Preço</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {cars.map(car => (
                <tr key={car.id}>
                  <td>{car.marca}</td>
                  <td>{car.modelo}</td>
                  <td>{car.ano}</td>
                  <td>{car.cor}</td>
                  <td>{car.preco}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEditClick(car)}>✏️</button>
                    <button className="delete-btn" onClick={() => handleDeleteClick(car.id)}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default CarList;