import Marquee from '@/components/ui/marquee';
import { ProductCard } from '@/components/ui/product-card';
import { achievementsData } from '@/constants';

const Achievements = () => {
  return (
    <section className="mx-auto flex flex-col items-center justify-center bg-[var(--surface-primary)] pt-12 transition-all duration-200 md:pt-16 lg:pt-20">
      <h1 className="mx-auto max-w-4xl text-[24px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[34px] lg:text-[44px]">
        {achievementsData.heading}
      </h1>
      <h2 className="mx-auto mt-2 max-w-2xl px-8 text-center text-[16px] text-[var(--text-secondary)] md:text-[22px]">
        {achievementsData.subHeading}
      </h2>

      <div className="mt-16 mb-12 w-full transition-all duration-200 md:mt-18">
        <Marquee
          pauseOnHover
          className="flex h-full items-center bg-transparent [--duration:30s]"
        >
          {achievementsData.productsData.map((product) => (
            <div
              key={product.id}
              className="mx-3 min-w-[300px] sm:min-w-[350px] lg:min-w-[400px]"
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
        </Marquee>
      </div>
    </section>
  );
};

export default Achievements;
