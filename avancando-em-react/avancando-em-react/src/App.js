import { useState } from 'react';
import './App.css';
import CarDetails from './components/CarDetails';
import ChangeMessageState from './components/ChangeMessageState';
import Conteiner from './components/Conteiner';
import ExecuteFunction from './components/ExecuteFunction';
import Fragments from './components/Fragments';
import Message from './components/Message';
import UserDatails from './components/UserDatails';

function App() {

  const car = [
    {id: 1, brand: "ferrari", color: "Amarelo", newCar: true, km: 0 },
    {id: 2, brand: "kia", color: "branco", newCar: false, km: 34343 },
    {id: 3, brand: "renault", color: "azul", newCar: false, km: 234 },
  ]

  function showMessage() {
    console.log("Evendo do componente pai!");

  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const pessoas = [
    {id: 1, nome: "Fábio de Paula", idade: 37, profissao: "Administrador"},
    {id: 2, nome: "Aretha Silva", idade: 38, profissao: "Jornalista"},
    {id: 3, nome: "Analu", idade: 4, profissao: "Estudante"},
  ]


  return (
    <div className="App">
       { /* Loop em Array de Objetos */}
      {car.map((car) => (
        <CarDetails
        key={car.id}
        brand={car.brand}
        color={car.color}
        km={car.km} 
        />

      ))}

      <Fragments />

      {/* children */}

      <Conteiner>
        <p>Este é o conteúdo</p>
      
      </Conteiner>

      {/* Executar Função */}

      <ExecuteFunction myFunction={showMessage} />

      {/* State Lift */}
        <Message msg={message} />
        <ChangeMessageState handleMessage={handleMessage}/>

      {/* Desafio */}

      {pessoas.map((pessoas) => (
        <UserDatails
        key={pessoas.id}
        nome={pessoas.nome}
        idade={pessoas.idade}
        profissao={pessoas.profissao}
        />
      ))}


    </div>
  );
}

export default App;
