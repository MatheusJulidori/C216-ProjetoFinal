import './CarList.css';
import { useState, useEffect } from 'react';
import EditCar from '../EditCar/EditCar';
import Swal from 'sweetalert2';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [carToEdit, setCarToEdit] = useState(null);

  useEffect(() => {
    // Fetch cars from API
    // fetch('API_URL')
    //   .then(response => response.json())
    //   .then(data => setCars(data))
    //   .catch(error => console.error('Error fetching cars:', error));

    // Placeholder data for now
    const placeholderCars = [
      { id: 1, marca: 'Toyota', modelo: 'Corolla', ano: '2021', cor: 'Preto', preco: '50000' },
      { id: 2, marca: 'Honda', modelo: 'Civic', ano: '2020', cor: 'Branco', preco: '60000' },
      { id: 3, marca: 'Ford', modelo: 'Mustang', ano: '2019', cor: 'Vermelho', preco: '80000' },
    ];
    setCars(placeholderCars);
  }, []);

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
    }).then((result) => {
      if (result.isConfirmed) {
        // Logic to delete the car
        setCars(cars.filter(car => car.id !== carId));
        Swal.fire('Deletado!', 'O carro foi deletado.', 'success');
      }
    });
  };

  const handleSave = (updatedCar) => {
    setCars(cars.map(car => (car.id === updatedCar.id ? updatedCar : car)));
    setCarToEdit(null);
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