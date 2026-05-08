import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithSkeleton = ({ src, alt, className }: ImageWithSkeletonProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-200 animate-pulse"
          />
        )}
      </AnimatePresence>
      <img
        src={src}
        alt={alt}
        className={`w-full h-auto object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default ImageWithSkeleton;
