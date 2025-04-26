'use client';

import { useEffect, useRef, useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface SliderProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
}

export function Slider({ children, className, itemClassName }: SliderProps) {
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
    <div className="relative w-full">
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

        <div className="mt-6 flex items-center justify-center gap-6">
          <button
            onClick={scrollLeft}
            className="flex items-center justify-center p-2 text-[var(--text-brand)] disabled:text-gray-400"
            disabled={currentIndex === 0}
          >
            <ChevronLeftIcon className="size-8" />
          </button>

          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: totalItems }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`size-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'scale-125 bg-[var(--text-brand)]'
                    : 'scale-100 bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="flex items-center justify-center p-2 text-[var(--text-brand)] disabled:text-gray-400"
            disabled={currentIndex >= totalItems - 1}
          >
            <ChevronRightIcon className="size-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
