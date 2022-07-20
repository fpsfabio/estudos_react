const Challenge = () => {

    let numero_1 = 18
    let numero_2 = 30

    const HandleSomar = () => {

        let soma = numero_1 + numero_2

        console.log(soma)

    } 


    return (

        <div>
            <h1>Desafio feito!</h1>
            <p>A soma entre o {numero_1} e o {numero_2} é:</p>
            <button onClick={HandleSomar}>Clique aqui para somar</button>
        </div>
    )

};

export default Challenge;