import { useState } from 'react';
import imageSrc from './Rectangle5160.jpg';

const Gallery = () => {
  const initialImages = [
    imageSrc,
    imageSrc,
    imageSrc
  ];

  const [images, setImages] = useState(initialImages);

  const addImage = () => {
    setImages([...images, imageSrc]);
  };

  return (
    <div className="p-6 shadow-md mt-6 mb-6 pl-1/4">
      <div className="flex justify-between">
        <button className='bg-black rounded-md shadow-slate-200-inset p-3 text-white'>Gallery</button>

      <button 
        onClick={addImage} 
        className="bg-slate-400 rounded-md text-white p-2 m-3 shadow-md backdrop-blur-custom"
      >
        Add Image
      </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt={`Gallery ${index + 1}`} 
            className="w-full h-auto object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;