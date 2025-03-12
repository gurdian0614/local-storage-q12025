import { useState } from "react"

const useModalProducto = (operacion) => {
    const [productos, setProductos] = useState([])
    const [id, setId] = useState('')
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState('')

    const enviarSolicitud = (metodo, parametros = {}) => {
        const saveUpdateProducto = [...productos]
        let mensaje = ''

        if (metodo === 'POST') {
            saveUpdateProducto.push({ ...parametros, id: Date.now()})
            mensaje = 'Producto ingresado correctamente'
        } else if (metodo === 'PUT') {
            const productoIndex = saveUpdateProducto.findIndex(producto => producto.id === parametros.id)

            if (productoIndex !== -1) {
                saveUpdateProducto[productoIndex] = {...parametros}
            }
        }

        localStorage.setItem('PRODUCTOS', JSON.stringify(saveUpdateProducto))
        setProductos(saveUpdateProducto)
        alert(mensaje)
        document.getElementById('btnCerrarModal').click()
    }

    const validar = () => {
        let metodo = ''
        let payload = {
            id: id || Date.now(),
            nombre: nombre,
            descripcion: descripcion,
            precio: parseFloat(precio)
        }

        if (operacion === 1) {
            metodo = 'POST'
        } else {
            metodo = 'PUT'
        }

        enviarSolicitud(metodo, payload)
    }

    const openModal = (id1, nombre1, descripcion1, precio1) => {
        setId(id1)
        setNombre(nombre1)
        setDescripcion(descripcion1)
        setPrecio(precio1)
        console.log(nombre1)
    }

    return {
        validar,
        id,
        nombre,
        setNombre,
        descripcion,
        setDescripcion,
        precio,
        setPrecio,
        openModal
    }
}

export default useModalProducto