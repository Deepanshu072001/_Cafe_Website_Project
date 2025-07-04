import React from 'react';

function Gallery() {
  return (
    <div className="page gallery">
      <h1>Photos</h1>
      <h1> Coffee</h1>
      <div className="gallery-grid">
        <img src="/images/coffee.jpg" alt="Coffee" />
        <img src="/images/coffee2.png" alt="Espresso" />
        <h1> coffee 2</h1>
        <img src="/images/coffee3.png" alt="Latte" />
        <img src="/images/coffee4.png" alt="Pastries" />
      </div>
    </div>
  );
}

export default Gallery;
