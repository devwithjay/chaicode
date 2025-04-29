import { Carousel } from '@/components/ui/carousel';
import { ProductCard } from '@/components/ui/product-card';
import { achievementsData } from '@/constants';

const Achievements = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[var(--surface-primary)] pt-12 md:pt-16">
      <h1 className="mx-auto max-w-4xl text-[28px] leading-tight font-bold text-[var(--text-brand)] md:text-[34px] lg:text-[44px]">
        {achievementsData.heading}
      </h1>
      <h3 className="mx-auto mt-2 max-w-2xl px-8 text-center text-[14px] text-[var(--text-secondary)] md:text-[18px]">
        {achievementsData.subHeading}
      </h3>

      <div className="mt-16 mb-12 w-full md:mt-18">
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
