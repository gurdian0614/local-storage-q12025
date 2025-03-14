import useTablaProducto from "../hooks/useTablaProducto"
import Campo from "./Campo"
import { useEffect } from "react"

const Producto = () => {
    const {
        getProducto,
            productos,
            setProductos,
            nombre,
            setNombre,
            descripcion,
            setDescripcion,
            precio,
            setPrecio,
            openModal,
            validar,
            tituloModal,
            deleteProducto,
      } = useTablaProducto()
    
      useEffect(() => {
        setProductos(getProducto())
      }, [])

    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-md-4 offset-md-4">
                    <div className="d-grid mx-auto">
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalProducto" onClick={() => openModal(1)} ><i className="fa-solid fa-circle-plus" /> Añadir</button>
                    </div>
                </div>
            </div>

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
                {productos.map((producto, i) => (
                  <tr key={producto.id}>
                    <td>{i + 1}</td>
                    <td>{producto.nombre}</td>
                    <td>{producto.descripcion}</td>
                    <td>
                      {producto.precio.toLocaleString("es-HN", {
                        style: "currency",
                        currency: "HNL",
                      })}
                    </td>
                    <td>
                      <button
                        className="btn btn-warning"
                        data-bs-toggle="modal"
                        data-bs-target="#modalProducto"
                        onClick={() =>
                          openModal(2, producto)
                        }
                      >
                        <i className="fa-solid fa-edit" />
                      </button>
                      <button className="btn btn-danger" onClick={() => deleteProducto(producto.id)} >
                        <i className="fa-solid fa-trash" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div
          id="modalProducto"
          className="modal fade"
          aria-hidden="true"
          tabIndex="-1"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <label className="h5">{tituloModal}</label>
                <button
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="close"
                />
              </div>
              <div className="modal-body">
                <Campo
                  id="nombre"
                  iconName="fa-solid fa-gift"
                  inputType="text"
                  placeHolder="Nombre"
                  onChange={(e) => setNombre(e.target.value)}
                  value={nombre}
                />

                <Campo
                  id="descripcion"
                  iconName="fa-solid fa-comment"
                  inputType="text"
                  placeHolder="Descripción"
                  onChange={(e) => setDescripcion(e.target.value)}
                  value={descripcion}
                />

                <Campo
                  id="precio"
                  iconName="fa-solid fa-dollar-sign"
                  inputType="number"
                  placeHolder="Precio"
                  onChange={(e) => setPrecio(e.target.value)}
                  value={precio}
                />
              </div>
              <div className="modal-footer">
                <button className="btn btn-success" onClick={() => validar()}>
                  <i className="fa-solid fa-floppy-disk" /> Guardar
                </button>

                <button
                  id="btnCerrarModal"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  <i className="fa-solid fa-circle-xmark" /> Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Producto