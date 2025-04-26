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
      const cardWidth = sliderRef.current.querySelector('div > div')?.clientWidth || sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({ left: -(cardWidth + 16), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.querySelector('div > div')?.clientWidth || sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({ left: cardWidth + 16, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const cardWidth = sliderRef.current.querySelector('div > div')?.clientWidth || clientWidth;
      
      // Calculate the index of the most visible card
      const newIndex = Math.round(scrollLeft / (cardWidth + 16));
      setCurrentIndex(Math.min(newIndex, totalItems - 1));
      
      // Handle edge case when scrolled to the end
      if (scrollLeft + clientWidth >= scrollWidth - 1) {
        setCurrentIndex(totalItems - 1);
      }
    }
  };

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.querySelector('div > div')?.clientWidth || sliderRef.current.clientWidth;
      sliderRef.current.scrollTo({
        left: index * (cardWidth + 16),
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
      <div className={`group relative flex w-full flex-col gap-4 overflow-hidden ${className}`}>
        <div
          className={`flex snap-x snap-proximity overflow-x-auto scroll-smooth px-6 ${itemClassName}`}
          ref={sliderRef}
          onScroll={handleScroll}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {Array.isArray(children) ? (
            children.map((child, index) => (
              <div key={index} className="flex-shrink-0 snap-start">
                {child}
              </div>
            ))
          ) : (
            <div className="flex-shrink-0 w-full snap-start">
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
            <ChevronLeftIcon className="size-6" />
          </button>

          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: totalItems }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
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
            <ChevronRightIcon className="size-6" />
          </button>
        </div>
      </div>
    </div>
  );
}