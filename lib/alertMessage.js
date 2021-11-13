import Swal from 'sweetalert2';

export const alertMessage = async ({ icon, title, text }) => {
  await Swal.fire({
    icon,
    title,
    text,
    showConfirmButton: false,
  });
};
