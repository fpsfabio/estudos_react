const TemplateExpressions = () => {

    const name = "Fábio";
    const data = {
        Age: 31,
        Job: "Programador",
    };

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como {data.Job}</p>

        </div>
    )


}

export default TemplateExpressions