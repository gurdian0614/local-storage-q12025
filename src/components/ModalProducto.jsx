import Campo from "./Campo";

const ModalProducto = () => {
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
              />

              <Campo
                id="descripcion"
                iconName="fa-solid fa-comment"
                inputType="text"
                placeHolder="Descripción"
              />

              <Campo
                id="precio"
                iconName="fa-solid fa-dollar-sign"
                inputType="number"
                placeHolder="Precio"
              />
            </div>
            <div className="modal-footer">
              <button className="btn btn-success">
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