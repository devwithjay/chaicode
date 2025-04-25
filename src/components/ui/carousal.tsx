"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
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
        className={`relative flex flex-col gap-4 group w-full overflow-hidden ${className}`}
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
          className="absolute left-2 w-fit top-1/2 -translate-y-1/2 border border-neutral-800 hover:bg-neutral-50 bg-neutral-50/80 rounded-full items-center justify-center disabled:hover:none disabled:bg-neutral-400 transition-all duration-300 cursor-pointer shadow-md p-2 text-neutral-800 disabled:opacity-0 opacity-100 flex"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <ChevronLeftIcon className="size-5 text-neutral-800" />
        </button>

        <button
          className="absolute right-2 w-fit top-1/2 -translate-y-1/2 border border-neutral-800 hover:bg-neutral-50 bg-neutral-50/80 rounded-full items-center justify-center disabled:hover:none disabled:bg-neutral-400 transition-all duration-300 cursor-pointer shadow-md p-2 text-neutral-800 disabled:opacity-0 opacity-100 flex"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <ChevronRightIcon className="size-5" />
        </button>
      </div>
    </div>
  );
}