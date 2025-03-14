import Swal from "sweetalert2"

const alertaSuccess = (mensaje) => {
    Swal.fire({
        title: mensaje,
        icon: 'success'
    })
}

const alertaError = (mensaje) => {
    Swal.fire({
        title: mensaje,
        icon: 'error'
    })
}

const alertaWarning = (mensaje, id = '') => {
    onFocus(id)

    Swal.fire({
        title: mensaje,
        icon: 'warning'
    })
}

const onFocus = (id) => {
    if (id !== '') {
        document.getElementById(id).focus()
    }
}

export {
    alertaSuccess,
    alertaError,
    alertaWarning,
}