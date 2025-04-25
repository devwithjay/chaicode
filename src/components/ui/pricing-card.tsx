import { FaCalendarAlt, FaClock } from 'react-icons/fa';

interface PricingCardProps {
  title: string;
  description: string;
  startDate: string;
  duration: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
  learnMoreText: string;
  learnMoreLink: string;
}

const PricingCard = ({
  title,
  description,
  startDate,
  duration,
  price,
  originalPrice,
  imageUrl,
  learnMoreText,
  learnMoreLink,
}: PricingCardProps) => {
  const savingsPercentage = Math.round(
    ((originalPrice - price) / originalPrice) * 100,
  );

  return (
    <div className="flex h-full w-full max-w-md flex-col overflow-hidden rounded-lg bg-[var(--surface-secondary)] shadow-lg">
      <img className="h-48 w-full object-cover" src={imageUrl} alt={title} />

      <div className="flex flex-grow flex-col p-4">
        <h3 className="mb-2 text-lg font-bold text-[var(--text-primary)] md:text-xl">
          {title}
        </h3>

        <p className="mb-4 flex-grow text-xs text-[var(--text-secondary)] md:text-sm">
          {description}
        </p>

        <div className="mb-4 flex items-center text-sm text-gray-500 dark:text-gray-300">
          <FaCalendarAlt className="mr-2 text-[var(--text-brand)]" />
          <span>Starts {startDate}</span>
        </div>
        <div className="mb-4 flex items-center text-sm text-gray-500 dark:text-gray-300">
          <FaClock className="mr-2 text-[var(--text-brand)]" />
          <span>Duration: {duration}</span>
        </div>

        <div className="mb-4 flex items-center">
          <span className="text-[18px] md:text-[19px]font-bold text-green-600 dark:text-green-500">
            ₹ {price} INR
          </span>
          <span className="ml-2 text-[12px] md:text-[13px] text-gray-500 line-through dark:text-gray-400">
            ₹ {originalPrice} INR
          </span>
          <span className="ml-2 rounded-md bg-orange-100 px-2 py-1 text-xs font-medium whitespace-nowrap text-orange-600">
            Save {savingsPercentage}%
          </span>
        </div>
      </div>

      <a href={learnMoreLink} target="_blank" rel="noopener noreferrer">
        <button className="w-full cursor-pointer rounded-md bg-[var(--surface-brand)] py-2 text-white transition-all duration-300 hover:bg-[var(--surface-brand-hover)]">
          {learnMoreText}
        </button>
      </a>
    </div>
  );
};

export default PricingCard;
