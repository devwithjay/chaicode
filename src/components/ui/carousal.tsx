'use client';

import { useEffect, useRef, useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
}

export function Carousel({
  children,
  className,
  itemClassName,
}: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkScrollability();
    const currentRef = carouselRef.current;

    const resizeObserver = new ResizeObserver(checkScrollability);
    if (currentRef) {
      resizeObserver.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="relative w-full">
      <div
        className={`group relative flex w-full flex-col gap-4 overflow-hidden ${className}`}
      >
        <div
          className={`flex overflow-x-auto scroll-smooth px-6 ${itemClassName}`}
          ref={carouselRef}
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
          {children}
        </div>
        <button
          className="disabled:hover:none absolute top-1/2 left-2 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-1 border-[var(--text-brand)] bg-orange-50 p-1 text-[var(--text-brand)] opacity-100 transition-all duration-300 disabled:opacity-0"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <ChevronLeftIcon className="size-8" />
        </button>

        <button
          className="disabled:hover:none absolute top-1/2 right-2 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-1 border-[var(--text-brand)] bg-orange-50 p-1 text-[var(--text-brand)] opacity-100 transition-all duration-300 disabled:opacity-0"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <ChevronRightIcon className="size-8" />
        </button>
      </div>
    </div>
  );
}
