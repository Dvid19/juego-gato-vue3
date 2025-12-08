import Swal from 'sweetalert2'

export function alertBase(msj){
    Swal.fire({
        position: "center",
        // icon: "success",
        icon: "error",
        title: msj,
        showConfirmButton: false,
        timer: 1500
    });
}