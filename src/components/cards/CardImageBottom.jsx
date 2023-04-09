import React from 'react';
import Image from 'next/image';

const CardImageBottom = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Card with an image on bottom</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <Image src="/img/card.jpg" className="card-img-bottom" alt="..." width="229" height="171"/>
        </div>
    );
}

export default CardImageBottom;
