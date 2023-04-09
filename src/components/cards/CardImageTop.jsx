import React from 'react';
import Image from 'next/image';

const CardImageTop = () => {
    return (
        <div className="card">
        <Image src="/img/card.jpg" className="card-img-top" alt="..." width="229" height="171"/>
        <div className="card-body">
          <h5 className="card-title">Card with an image on top</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    );
}

export default CardImageTop;
