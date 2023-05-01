import React, {useEffect} from 'react';

const Logout = () => {
    useEffect(() => {
        localStorage.removeItem("authToken");
        window.location = "/";
    });
    return (
        <div>

        </div>
    );
};

export default Logout;
