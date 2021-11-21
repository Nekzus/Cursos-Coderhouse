const ItemListContainer = (props) => {
    const {mensaje} = props; // Destructuring de props.
    const style={ // Estilo del mensaje.
        'text-align': 'center',
        'background-color': 'rgb(53, 51, 51)',
    }
    return (
        <main>
            <h2 className="mensaje-props" style={style}>{mensaje}</h2>
        </main>
    )
}

export default ItemListContainer;
