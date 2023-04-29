import React, {useEffect} from 'react';
import Swal from 'sweetalert2';

const ConfirmDialog = ({onConfirm, children}) => {

    useEffect(() => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                onConfirm(true);
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            } else onConfirm(false);
        })
    }, []);

    return (
        <div>
            {children}
        </div>
    );
}

export default ConfirmDialog;
