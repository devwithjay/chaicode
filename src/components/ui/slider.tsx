'use client';

import { useEffect, useRef, useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface SliderProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
}

const Slider = ({ children, className, itemClassName }: SliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const scrollLeft = () => {
    if (sliderRef.current) {
      const cardWidth =
        sliderRef.current.querySelector('div > div')?.clientWidth ||
        sliderRef.current.clientWidth;
      const newIndex = Math.max(currentIndex - 1, 0);
      sliderRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth',
      });
      setCurrentIndex(newIndex);
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const cardWidth =
        sliderRef.current.querySelector('div > div')?.clientWidth ||
        sliderRef.current.clientWidth;
      const newIndex = Math.min(currentIndex + 1, totalItems - 1);
      sliderRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth',
      });
      setCurrentIndex(newIndex);
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const cardWidth =
        sliderRef.current.querySelector('div > div')?.clientWidth ||
        clientWidth;

      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.min(newIndex, totalItems - 1));

      if (scrollLeft + clientWidth >= scrollWidth - 1) {
        setCurrentIndex(totalItems - 1);
      }
    }
  };

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      const cardWidth =
        sliderRef.current.querySelector('div > div')?.clientWidth ||
        sliderRef.current.clientWidth;
      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (Array.isArray(children)) {
      setTotalItems(children.length);
    } else {
      setTotalItems(1);
    }
  }, [children]);

  return (
    <div className="relative w-full transition-all duration-200">
      <div
        className={`group relative flex w-full flex-col overflow-hidden ${className}`}
      >
        <div
          className={`no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth ${itemClassName}`}
          ref={sliderRef}
          onScroll={handleScroll}
        >
          {Array.isArray(children) ? (
            children.map((child, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 snap-center sm:w-[55%] md:w-auto"
              >
                {child}
              </div>
            ))
          ) : (
            <div className="w-full flex-shrink-0 snap-center sm:w-[55%] md:w-auto">
              {children}
            </div>
          )}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <button
            aria-label="Previous Slide"
            onClick={scrollLeft}
            className="flex cursor-pointer items-center justify-center p-1 text-[var(--text-brand)] transition-all duration-200 disabled:text-gray-400 md:p-2"
            disabled={currentIndex === 0}
          >
            <ChevronLeftIcon className="size-6 md:size-8" />
          </button>

          <div className="flex items-center justify-center gap-4 p-2 ">
            {Array.from({ length: totalItems }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`size-1.5 cursor-pointer rounded-full transition-all duration-200 md:size-2 ${
                  currentIndex === index
                    ? 'scale-125 bg-[var(--text-brand)]'
                    : 'scale-100 bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            aria-label="Next Slide"
            onClick={scrollRight}
            className="flex cursor-pointer items-center justify-center p-1 text-[var(--text-brand)] transition-all duration-200 disabled:text-gray-400 md:p-2"
            disabled={currentIndex >= totalItems - 1}
          >
            <ChevronRightIcon className="size-6 md:size-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
