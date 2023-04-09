import React from 'react';
import Image from 'next/image';

const CardImageLeft = () => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <Image src="/img/card.jpg" className="img-fluid rounded-start" alt="..." width="160" height="120"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card with an image on left</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardImageLeft;
