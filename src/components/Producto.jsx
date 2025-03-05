import TablaProducto from "./TablaProducto"
import ModalProducto from "./ModalProducto"

const Producto = () => {
    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-md-4 offset-md-4">
                    <div className="d-grid mx-auto">
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalProducto"><i className="fa-solid fa-circle-plus" /> Añadir</button>
                    </div>
                </div>
            </div>

            <TablaProducto />

            <ModalProducto />
        </div>
    )
}

export default Producto