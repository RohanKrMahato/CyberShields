// import "./Gallery.css";
// import gallery from "./gallery.png"
// function Gallery() {
//   return (
//     <div className="Gallery-container">
//         <div className="Gallery-head">Gallery</div>
//     <div className="Gallery-box-div">
//     <div className="Gallery-box">
//       <img className="galleryimage" src={gallery} alt={""}></img>
//     </div>
//     </div>
//     </div>
//   );
// }
// export default Gallery;

import React, { useState } from 'react';
import "./Gallery.css";
import gallery1 from "./gallery1.png";
import gallery2 from "./gallery2.png";
// import gallery3 from "./gallery3.png";

function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [gallery1, gallery2];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="Gallery-container">
      <div className="Gallery-head">Gallery</div>
      <div className="Gallery-box-div">

    <div className='gallery-box-button-container'>
    <div className="Gallery-box">
          <img className="galleryimage" src={images[currentImageIndex]} alt={""}></img>
        </div>
        <div className='gallery-button-div'>
        <button className="gallery-prevButton" onClick={previousImage}>Previous</button>
          <button className="gallery-nextButton" onClick={nextImage}>Next</button>
        </div>
    </div>
      </div>
    </div>
  );
}

export default Gallery;
