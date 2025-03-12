import Campo from "./Campo";
import useModalProducto from "../hooks/useModalProducto";

const ModalProducto = () => {
  const {
    validar,
    nombre,
    setNombre,
    descripcion,
    setDescripcion,
    precio,
    setPrecio
  } = useModalProducto(1)
    return (
      <div
        id="modalProducto"
        className="modal fade"
        aria-hidden="true"
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <label className="h5">Añadir</label>
              <button
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="close"
              />
            </div>
            <div className="modal-body">
              <input type="hidden" id="id" />

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
    );
}

export default ModalProducto