import { achievementsData } from '@/constants';

import { Carousel } from '../ui/carousal';
import { ProductCard } from '../ui/product-card';

const Achievements = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[var(--surface-primary)] py-4 pt-12 md:pt-16 pb-12">
      <h1 className="mx-auto max-w-4xl text-[28px] leading-tight font-bold text-[var(--text-brand)] md:text-[34px] lg:text-[44px]">
        {achievementsData.heading}
      </h1>
      <h3 className="mx-auto mt-2 max-w-2xl text-center text-[14px] text-[var(--text-secondary)] md:text-[18px]">
        {achievementsData.subHeading}
      </h3>

      <div className="mt-12 md:mt-18  mb-12 w-full">
        <Carousel className="w-full" itemClassName="gap-6">
          {achievementsData.productsData.map((product) => (
            <div
              key={product.id}
              className="min-w-[300px] sm:min-w-[350px] lg:min-w-[400px]"
            >
              <ProductCard
                imageUrl={product.imageUrl}
                title={product.title}
                description={product.description}
                websiteUrl={product.websiteUrl}
                socialLinks={product.socialLinks}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Achievements;
