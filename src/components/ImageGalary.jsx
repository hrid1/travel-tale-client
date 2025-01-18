// import React from "react";
// import { Gallery } from "react-grid-gallery";

// const ImageGallery = ({ imageUrls }) => {
//   const images = imageUrls?.map((url, index) => {
//     // Generate random width and height between 300-500
//     const width = Math.floor(Math.random() * (800 - 200 + 1)) + 300;
//     const height = Math.floor(Math.random() * (500 - 200 + 1)) + 200;

//     return {
//       src: url,
//       width,
//       height,
//       alt: `Image ${index + 1}`, // Optional alt text
//     };
//   });

//   // Modify the last image to take full width
//   if (images.length > 0) {
//     images[images.length - 1] = {
//       ...images[images.length - 1],
//       width: 1400, // Set a large width for full width
//       height: 400, // Adjust height as needed
//     };
//   }

//   return <Gallery  images={images} />;
// };

// export default ImageGallery;

import React from "react";

const ImageGalleryFlex = ({ imageUrls }) => {
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center items-center">
      {imageUrls.map((url, index) => {
        const isLastOdd =
          imageUrls.length % 2 !== 0 && index === imageUrls.length - 1;

        return (
          <div
            key={index}
            className={`overflow-hidden rounded-lg h-44 ${
              isLastOdd ? "w-auto flex-1 " : "w-[calc(50%-0.5rem)]  md:w-[calc(33.333%-1rem)]"
            }`}
          >
            <img
              src={url}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageGalleryFlex;
