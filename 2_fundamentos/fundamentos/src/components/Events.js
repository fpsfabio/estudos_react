const Events = () => {

    const handleMyEvent = () => {
        console.log("evento ativo")
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("clicou")}>Clique aqui também</button>
            </div>
        </div>
    )

}

export default Events