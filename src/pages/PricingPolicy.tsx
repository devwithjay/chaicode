'use client';

const PricingPolicy = () => {
  return (
    <section className="mx-auto max-w-5xl bg-[var(--surface-primary)] px-6 py-20  ">
      <h1 className="mb-10 text-4xl font-bold text-[var(--text-brand)] md:text-5xl">
        Pricing Policy
      </h1>

      <div className="space-y-12 text-sm leading-relaxed text-[var(--text-primary)] md:text-base lg:text-lg">
        <section className="space-y-4">
          <p>
            At ChaiCode, transparency, fairness, and customer satisfaction are
            central to our pricing structure. This Pricing Policy outlines the
            terms related to pricing, payments, discounts, and related matters
            associated with our services and offerings.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold md:text-2xl">
            1. Customized Pricing
          </h2>
          <p>
            We offer personalized pricing based on the scope, complexity, and
            outcomes of the services requested. Each service quote is shared
            with you in advance, reflecting the time, effort, and quality
            involved. Typically, our pricing ranges from INR 500 to INR 14,000
            depending on the nature of the service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold md:text-2xl">
            2. Payment Schedule
          </h2>
          <p>
            Certain services are available on a subscription or time-bound
            basis. The duration for such services varies from 1 month to 1 year,
            as clearly mentioned in the service description. All payments must
            be made upfront unless otherwise specified in the agreement.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold md:text-2xl">
            3. Price Matching
          </h2>
          <p>
            We are committed to offering competitive pricing. If you find a
            similar product or service (matching in specifications, color, and
            size) at a lower price from a comparable retailer, we will do our
            best to match that price.
          </p>
          <p>
            <strong>Note:</strong> We do not match prices from auction sites,
            outlet stores, or websites offering discount coupons, promotional
            pricing, shipping offers, or gift card incentives.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold md:text-2xl">
            4. Sale Adjustments
          </h2>
          <p>
            If an item or service you have purchased is reduced in price within
            14 days of your purchase, you are eligible for a one-time price
            adjustment. To request a sale adjustment, please contact our support
            team with your order details.
          </p>
          <p>
            Our platform runs sales offers from time to time and such offers are
            not eligible for further adjustments.
          </p>
          <p>
            <strong>Note:</strong> Designer services or items bought on sale are
            not eligible for further adjustments. Discounted offers on other
            platforms are not applicable.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold md:text-2xl">
            5. Pricing Errors
          </h2>
          <p>
            While we strive for complete accuracy, inadvertent pricing errors
            may occur. If a product or service is listed at an incorrect price,
            we reserve the right to cancel the order and notify you of the
            error. If the correct price is higher than what was displayed, you
            may choose to proceed with the updated amount or cancel your order
            without penalty.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold md:text-2xl">
            6. Shopping Cart Policy
          </h2>
          <p>
            Prices displayed in your shopping cart reflect the most recent
            pricing from the product or service page. This price may differ from
            the one shown when you initially added the item. All offerings are
            intended for personal use only. We reserve the right to refuse
            orders that appear to be intended for resale.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold md:text-2xl">
            Contact Information
          </h2>
          <p>
            If you have any questions or need further assistance, please reach
            out to our Customer Service Team at{' '}
            <a
              href="mailto:team@chaicode.com"
              className="text-[var(--text-brand)] underline"
            >
              team@chaicode.com
            </a>{' '}
            — available 24/7 to support you.
          </p>
        </section>
      </div>
    </section>
  );
};

export default PricingPolicy;
