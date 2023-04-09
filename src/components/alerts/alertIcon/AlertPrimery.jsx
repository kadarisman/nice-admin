import React from 'react';

const AlertPrimery = () => {
    return (
        <div className="alert alert-primary alert-dismissible fade show" role="alert">
            <i className="bi bi-star me-1"></i>
            A simple primary alert with icon—check it out!
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}

export default AlertPrimery;
