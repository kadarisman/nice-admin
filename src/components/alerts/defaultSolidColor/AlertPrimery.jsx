import React from 'react';

const AlertPrimery = () => {
    return (
        <div className="alert alert-primary bg-primary text-light border-0 alert-dismissible fade show" role="alert">
            A simple primary alert with solid color—check it out!
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}

export default AlertPrimery;
