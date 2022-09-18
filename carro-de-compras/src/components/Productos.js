import { Component } from "react";
import Producto from './Producto'

//Estilos in-line para los productos
const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}

//Componente Productos
class Productos extends Component {
    render() {
        const { productos, agregarAlCarro } = this.props

        return (
            <div style={styles.productos}>
                {productos.map(producto =>
                    <Producto
                        agregarAlCarro={agregarAlCarro}
                        key={producto.name}
                        producto={producto}
                    />)}
            </div>
        )
    }
}

export default Productos