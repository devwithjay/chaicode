'use client';

const RefundPolicy = () => {
  return (
    <section className="mx-auto max-w-5xl bg-[var(--surface-primary)] px-6 py-20  ">
      <h1 className="mb-10 text-4xl font-bold text-[var(--text-brand)] md:text-5xl">
        Refund Policy
      </h1>

      <div className="space-y-12 text-sm leading-relaxed text-[var(--text-primary)] md:text-base lg:text-lg">
        <section className="space-y-4">
          <p>
            At ChaiCode, we strive to deliver the highest quality online
            learning experiences. Please read our refund policy carefully before
            making a purchase.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold md:text-2xl">
            1. Digital Course Purchases – No Refund Policy
          </h2>
          <p>
            All our courses are digital products and are non-refundable. Once a
            course has been purchased, we do not offer refunds under any
            circumstances unless explicitly mentioned.
          </p>
          <p>To help you make an informed decision:</p>
          <ul className="list-inside list-disc space-y-2">
            <li>Most courses offer free sample videos for preview.</li>
            <li>
              You can also explore our content on YouTube to assess the teaching
              style and course quality before purchasing.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold md:text-2xl">
            2. Course/Batches Cancellation by Chai Code
          </h2>
          <p>
            In the rare event that a course or scheduled batch is cancelled by
            Chai Code and we are unable to deliver the promised service, a 100%
            refund will be issued to the original payment method.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold md:text-2xl">
            3. No Refunds on Sale or Discounted Courses
          </h2>
          <p>
            Courses purchased at a discounted price or during special sales are
            not eligible for refunds under any condition.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold md:text-2xl">4. No Exchanges</h2>
          <p>
            Each course is a self-contained digital property. Therefore, we do
            not allow exchanges between courses or upgrades after purchase.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold md:text-2xl">
            5. Gifting Courses
          </h2>
          <p>
            Currently, we do not support gifting of courses. All purchases are
            for individual use only.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold md:text-2xl">
            6. No Physical Shipping
          </h2>
          <p>
            All our offerings are delivered digitally through our website. We do
            not ship physical copies like CDs or DVDs.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold md:text-2xl">7. Need Help?</h2>
          <p>
            If you believe there has been an error in your purchase or if you
            face any issues accessing your course, feel free to contact our
            support team at{' '}
            <a
              href="mailto:team@chaicode.com"
              className="text-[var(--text-brand)] underline"
            >
              team@chaicode.com
            </a>
            .
          </p>
        </section>
      </div>
    </section>
  );
};

export default RefundPolicy;
