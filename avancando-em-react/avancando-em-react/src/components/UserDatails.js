import { useState } from "react"


const UserDatails = ({ id, nome, idade, profissao }) => {

const [carteira, setCarteira] = useState("")

function carteiras() {

    idade >= 18 ? (setCarteira("Sim")) : (setCarteira("Não"))

}
  
    return (
    <div>
        <h2>Detalhes das pessoas</h2>
        <ul>
            <li>id: {id}</li>
            <li>nome: {nome}</li>
            <li>idade: {idade}</li>
            <li>profissao: {profissao}</li>
            <li>Pode tirar carteira: {carteira}</li>
            <li><button onClick={carteiras}>Verificar Carteira</button></li>
        </ul>

    </div>
  )
}

export default UserDatails