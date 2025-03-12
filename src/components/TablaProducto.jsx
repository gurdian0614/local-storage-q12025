import useTablaProducto from "../hooks/useTablaProducto";
import useModalProducto from "../hooks/useModalProducto";
import { useEffect } from "react";

const TablaProducto = () => {
  const {
    getProducto,
    productos,
    setProductos,
  } = useTablaProducto()

  const {openModal,
    id,
    nombre,
    descripcion,
    precio,
  } = useModalProducto()

  useEffect(() => {
    setProductos(getProducto())
  }, [])

    return (
      <div className="row mt-3">
        <div className="col-12 col-lg-8 offset-lg-2">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Producto</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {
                  productos.map((producto, i) => (
                    <tr key={producto.id}>
                      <td>{i + 1}</td>
                      <td>{producto.nombre}</td>
                      <td>{producto.descripcion}</td>
                      <td>{producto.precio.toLocaleString('es-HN', {style: 'currency', currency: 'HNL'})}</td>
                      <td>
                        <button className="btn btn-warning" data-bs-toggle='modal' data-bs-target='#modalProducto' onClick={() => openModal(producto.id, producto.nombre, producto.descripcion, producto.precio)}>
                          <i className="fa-solid fa-edit" />
                        </button>
                        <button className="btn btn-danger">
                          <i className="fa-solid fa-trash" />
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}

export default TablaProducto