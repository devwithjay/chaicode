'use client';

interface BenefitItem {
  title: string;
  description: string;
  imageUrl: string;
}

interface AlumniSection {
  heading: string;
  description: string;
  alumniList: {
    url: string;
    website: string;
  }[];
}

interface BenefitsCardProps {
  heading: string;
  subHeading: string;
  benefits: BenefitItem[];
  alumni: AlumniSection;
}

export function BenefitsCard({ benefits, alumni }: BenefitsCardProps) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-[var(--border-primary)] bg-[var(--surface-secondary)] hover:border-[var(--text-brand)]"
          >
            <div className="h-48 overflow-hidden md:h-54">
              <img
                src={benefit.imageUrl || '/api/placeholder/400/300'}
                alt={benefit.title}
                className="h-auto w-full object-cover opacity-90"
              />
            </div>

            <div className="mt-0 p-4 md:mt-1 lg:mt-2">
              <h3 className="mb-2 text-lg font-semibold text-[var(--text-brand)] md:text-xl">
                {benefit.title}
              </h3>
              <p className="mb-4 text-sm font-medium text-[var(--text-secondary)] md:text-[16px]">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 overflow-hidden rounded-xl border border-[var(--border-primary)] bg-[var(--surface-secondary)] hover:border-[var(--text-brand)]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center px-6 py-6 lg:py-10">
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {alumni.alumniList.map(({ url, website }, i) => (
                <a
                  key={i}
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-12 cursor-pointer overflow-hidden rounded-full border-2 border-[var(--border-primary)] hover:border-[var(--text-brand)] md:size-15 lg:size-18"
                >
                  <img
                    src={url}
                    alt={`Alumni ${i + 1}`}
                    className="size-full object-cover"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="px-6 py-6 lg:py-10">
            <h3 className="mb-6 text-xl font-semibold text-[var(--text-brand)] md:text-2xl">
              {alumni.heading}
            </h3>
            {alumni.description.split('\n').map((para, index) => (
              <p key={index} className="mb-4 text-[var(--text-secondary)]">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
