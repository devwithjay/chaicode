import { whyChaiCodeData } from '@/constants';
import { LuExternalLink } from 'react-icons/lu';

import { WhyChaiCodeCard, WhyChaiCodeFeatured } from '../ui/why-chaicode-cards';

const WhyChaiCode = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[var(--surface-primary)] px-4 pt-6 sm:px-8 md:pt-10">
      <h1 className="mx-auto max-w-4xl text-[28px] leading-tight font-bold text-[var(--text-brand)] md:text-[34px] lg:text-[44px]">
        {whyChaiCodeData.heading}
      </h1>
      <h3 className="mx-auto mt-2 max-w-xl text-center text-[14px] text-[var(--text-secondary)] md:text-[18px]">
        {whyChaiCodeData.subHeading}
      </h3>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-6">
          {whyChaiCodeData.cards.slice(0, 3).map((card, index) => (
            <WhyChaiCodeCard
              key={`left-${index}`}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <WhyChaiCodeFeatured
          name={whyChaiCodeData.featured.name}
          description={whyChaiCodeData.featured.description}
          approachTitle={whyChaiCodeData.featured.approachTitle}
          approachDescription={whyChaiCodeData.featured.approachDescription}
          imageUrl={whyChaiCodeData.featured.imageUrl}
          socialLinks={whyChaiCodeData.featured.socialLinks}
        />

        <div className="flex flex-col gap-6">
          {whyChaiCodeData.cards.slice(3).map((card, index) => (
            <WhyChaiCodeCard
              key={`right-${index}`}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>  <div className="mt-10 md:mt-15 mb-6">
        <a
          href={whyChaiCodeData.ctaLink}
          className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--text-brand)] px-4 py-3 text-sm font-medium text-[var(--text-primary)] sm:px-6 sm:py-3 sm:text-base"
        >
          {whyChaiCodeData.ctaText}
          <LuExternalLink size={20} />
        </a>
      </div>
    </section>
  );
};

export default WhyChaiCode;
