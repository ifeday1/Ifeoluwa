import { useState, useEffect } from 'react';

// List of all images from different pages
const assetPaths = [
  import.meta.glob('../assets/frontwork.png', { eager: true }),

];

const Preloader = ({ onComplete }) => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [totalAssets, setTotalAssets] = useState(0);

  useEffect(() => {
    let isMounted = true;
    let loadedImages = 0;
    const images = [];

    // Collect all image paths
    assetPaths.forEach((pathObj) => {
      Object.values(pathObj).forEach((file) => {
        images.push(file.default);
      });
    });

    setTotalAssets(images.length);

    const checkCompletion = () => {
      if (loadedImages === images.length && isMounted) {
        setTimeout(() => onComplete(), 500);
      }
    };

    images.forEach((src) => {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        loadedImages++;
        setLoadedCount((prev) => prev + 1);
        checkCompletion();
      };

      img.onerror = () => {
        loadedImages++; // Skip if error
        checkCompletion();
      };
    });

    return () => {
      isMounted = false;
    };
  }, [onComplete]);

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-gray-900 text-white transition-opacity duration-700'>
      <h2 className='text-2xl font-bold animate-bounce'>
        Loading {Math.round((loadedCount / totalAssets) * 100)}%
      </h2>
      <div className='w-3/4 h-2 bg-gray-700 rounded-full mt-4'>
        <div
          className='h-full bg-blue-500 rounded-full transition-all'
          style={{ width: `${(loadedCount / totalAssets) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Preloader;
