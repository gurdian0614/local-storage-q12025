import { useState } from "react"
import Swal from "sweetalert2"
import { alertaSuccess, alertaError, alertaWarning } from "../alertas"

const useTablaProducto = () => {
    const [productos, setProductos] = useState([])
    const [id, setId] = useState('')
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState('')
    const [tituloModal, setTituloModal] = useState('')
    const [operacion, setOperacion] = useState('')
    
    const getProducto = () => {
        const localStorageProductos = localStorage.getItem('PRODUCTOS')
        const parsedProductos = localStorageProductos ? JSON.parse(localStorageProductos) : []

        return Array.isArray(parsedProductos) ? parsedProductos : []
    }

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
                mensaje = 'Producto actualizado correctamente'
            }
        } else if (metodo === 'DELETE') {
            const productoArr = saveUpdateProducto.filter(producto => producto.id !== parametros.id)
            console.log(productoArr)
            localStorage.setItem('PRODUCTOS'. JSON.stringify(productoArr))
            alertaSuccess('Producto eliminado correctamente')
        }

        localStorage.setItem('PRODUCTOS', JSON.stringify(saveUpdateProducto))
        setProductos(saveUpdateProducto)
        alertaSuccess(mensaje)
        document.getElementById('btnCerrarModal').click()
    }

    const validar = () => {
        let metodo = ''

        if (nombre === '') {
            alertaWarning('Nombre del producto en blanco', 'nombre')
        } else if (descripcion === '') {
            alertaWarning('Descripcion del producto en blanco', 'descripcion')
        } else if (precio === '') {
            alertaWarning('Precio del producto en blanco', 'precio')
        } else {
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
    }

    const openModal = (valorOperacion, producto) => {
        if (valorOperacion === 1) {
            console.log(valorOperacion)
            setTituloModal('Registrar Producto')
            setId('')
            setNombre('')
            setDescripcion('')
            setPrecio('')
            setOperacion(1)
        } else if (valorOperacion === 2) {
            setTituloModal('Editar Producto')
            setId(producto.id)
            setNombre(producto.nombre)
            setDescripcion(producto.descripcion)
            setPrecio(producto.precio)
            setOperacion(2)
        }
    }

    const deleteProducto = (id) => {
        Swal.fire({
            title: '¿Está seguro de eliminar el producto?',
            icon: 'question',
            text: 'No habrá marcha atrás',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                enviarSolicitud('DELETE', { id })
            }
        }).catch((error) => {
            alertaError(error)
        })
    }

    return {
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
    }
}

export default useTablaProducto