import { useState } from "react"

const useTablaProducto = () => {
    const [productos, setProductos] = useState([])
    const [id, setId] = useState('')
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState('')
    
    const getProducto = () => {
        const localStorageProductos = localStorage.getItem('PRODUCTOS')
        const parsedProductos = localStorageProductos ? JSON.parse(localStorageProductos) : []

        return Array.isArray(parsedProductos) ? parsedProductos : []
    }

    const openModal = (id, nombre, descripcion, precio) => {
        setId(id)
        setNombre(nombre)
        setDescripcion(descripcion)
        setPrecio(precio)
    }

    return {
        getProducto,
        productos,
        setProductos,
        id,
        nombre,
        descripcion,
        precio,
        openModal
    }
}

export default useTablaProducto