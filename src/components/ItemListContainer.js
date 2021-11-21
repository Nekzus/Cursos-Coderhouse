const ItemListContainer = (props) => {
    const {mensaje} = props; // Destructuring de props.
    return (
        <main>
            <h2 className="mensaje-props">{mensaje}</h2>
        </main>
    )
}

export default ItemListContainer;
