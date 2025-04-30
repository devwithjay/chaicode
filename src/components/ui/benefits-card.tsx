'use client';

interface BenefitItem {
  title: string;
  description: string;
  imageUrl: string;
}

interface AlumniSection {
  heading: string;
  description: string;
  imageUrls: string[];
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
      <div className="grid grid-cols-1 gap-6 transition-all duration-200 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl bg-[var(--surface-secondary)] transition-all duration-200"
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

      <div className="mt-12 overflow-hidden rounded-xl bg-[var(--surface-secondary)] transition-all duration-200">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center px-6 py-6 lg:py-10">
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {alumni.imageUrls.map((imageUrl, i) => (
                <div
                  key={i}
                  className="size-12 overflow-hidden rounded-full md:size-15 lg:size-18"
                >
                  <img
                    src={imageUrl}
                    alt={`Alumni ${i + 1}`}
                    className="size-full object-cover"
                  />
                </div>
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
