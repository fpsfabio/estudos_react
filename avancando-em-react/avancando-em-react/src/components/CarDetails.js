
const CarDetails =({id,brand, color, newCar, km}) => {

  return (
    <div>
        <h1>Loop de compontentes:</h1>
        <h2>Detalhes do carro</h2>
    
        <ul>
            <li>Id: {id}</li>
            <li>Marca: {brand}</li>
            <li>Cor: {color}</li>
            <li>km: {km}</li>
        </ul>
    </div>
  );

};

export default CarDetails