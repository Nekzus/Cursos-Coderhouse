import Header from './Header'
import Footer from './Footer'
import ItemListContainer from './ItemListContainer'

const App = () => {

    return (
        <>
            <Header />
            <ItemListContainer mensaje="Hola, Bienvenido... este es un mensaje mediante prop." />
            <Footer />
        </>
    )


};

export default App;
