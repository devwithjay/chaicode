import { LuExternalLink } from 'react-icons/lu';

import {
  WhyChaiCodeCard,
  WhyChaiCodeFeatured,
} from '@/components/ui/why-chaicode-cards';
import { whyChaiCodeData } from '@/constants';

const WhyChaiCode = () => {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col items-center justify-center bg-[var(--surface-primary)] px-8 pt-6 md:pt-10 lg:pt-20 2xl:px-0">
      <h1 className="mx-auto max-w-4xl text-[24px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[34px] lg:text-[44px]">
        {whyChaiCodeData.heading}
      </h1>
      <h3 className="mx-auto mt-2 max-w-xl text-center text-[16px] text-[var(--text-secondary)] md:text-[22px]">
        {whyChaiCodeData.subHeading}
      </h3>
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
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
      </div>
      <div className="mt-10 mb-6 md:mt-15">
        <a
          href={whyChaiCodeData.ctaLink}
          className="inline-flex items-center justify-center gap-3 rounded-lg bg-[var(--text-brand)] px-4 py-3 text-sm font-medium text-white sm:px-6 sm:py-3 sm:text-base"
        >
          {whyChaiCodeData.ctaText}
          <LuExternalLink size={20} />
        </a>
      </div>
    </section>
  );
};

export default WhyChaiCode;
