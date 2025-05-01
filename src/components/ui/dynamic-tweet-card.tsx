import { Suspense } from 'react';

import {
  type EnrichedTweet,
  type TweetProps,
  type TwitterComponents,
  enrichTweet,
} from 'react-tweet';
import { type Tweet, getTweet } from 'react-tweet/api';

import { cn } from '@/lib/utils';

interface TwitterIconProps {
  className?: string;
  [key: string]: unknown;
}

const Twitter = ({ className, ...props }: TwitterIconProps) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 26 26"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
  </svg>
);

const Verified = ({ className, ...props }: TwitterIconProps) => (
  <svg
    aria-label="Verified Account"
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <g fill="currentColor">
      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
    </g>
  </svg>
);

export const truncate = (str: string | null, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length - 3)}...`;
};

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('bg-primary/10 rounded-md', className)} {...props} />
  );
};

export const TweetSkeleton = ({
  className,
  ...props
}: {
  className?: string;
  [key: string]: unknown;
}) => (
  <div
    className={cn('flex w-full flex-col gap-2 rounded-xl p-4', className)}
    {...props}
  >
    <div className="flex flex-row gap-2">
      <Skeleton className="size-10 shrink-0 rounded-full" />
      <Skeleton className="h-10 w-full" />
    </div>
    <Skeleton className="h-20 w-full" />
  </div>
);

export const TweetNotFound = ({
  className,
  ...props
}: {
  className?: string;
  [key: string]: unknown;
}) => (
  <div
    className={cn(
      'flex w-full flex-col items-center justify-center gap-2 rounded-xl p-4',
      className,
    )}
    {...props}
  >
    <h3 className="text-lg">Tweet not found</h3>
  </div>
);

export const TweetHeader = ({ tweet }: { tweet: EnrichedTweet }) => (
  <div className="flex flex-row justify-between tracking-tight">
    <a
      href={tweet.user.url}
      target="_blank"
      rel="noreferrer"
      className="flex items-center space-x-2"
    >
      <img
        title={`Profile picture of ${tweet.user.name}`}
        alt={tweet.user.screen_name}
        height={48}
        width={48}
        src={tweet.user.profile_image_url_https}
        className="size-10 overflow-hidden rounded-full"
      />
      <div>
        <div className="flex items-center text-sm font-semibold whitespace-nowrap text-[var(--text-primary)]">
          {truncate(tweet.user.name, 20)}
          {tweet.user.verified ||
            (tweet.user.is_blue_verified && (
              <Verified className="ml-1 inline size-4 text-blue-500" />
            ))}
        </div>
        <div className="text-xs text-[var(--text-secondary)]">
          @{truncate(tweet.user.screen_name, 16)}
        </div>
      </div>
    </a>

    <a href={tweet.url} target="_blank" rel="noreferrer">
      <span className="sr-only">Link to tweet</span>
      <Twitter className="size-5 text-[var(--text-primary)] hover:scale-105" />
    </a>
  </div>
);

export const TweetBody = ({ tweet }: { tweet: EnrichedTweet }) => (
  <div className="text-sm leading-normal break-words">
    {tweet.entities.map((entity, idx) => {
      switch (entity.type) {
        case 'url':
        case 'symbol':
        case 'hashtag':
        case 'mention':
          return (
            <a
              key={idx}
              href={entity.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-normal text-[var(--text-secondary)]"
            >
              <span>{entity.text}</span>
            </a>
          );
        case 'text':
          return (
            <span
              key={idx}
              className="font-normal text-[var(--text-primary)]"
              dangerouslySetInnerHTML={{ __html: entity.text }}
            />
          );
      }
    })}
  </div>
);

export const TweetMedia = ({ tweet }: { tweet: EnrichedTweet }) => {
  if (
    !tweet.video &&
    !tweet.photos &&
    // @ts-expect-error - tweet.card is not defined
    !tweet?.card?.binding_values?.thumbnail_image_large?.image_value.url
  ) {
    return null;
  }

  return (
    <div className="mt-2">
      {tweet.video && (
        <video
          poster={tweet.video.poster}
          autoPlay
          loop
          muted
          playsInline
          className="w-full rounded-lg shadow-sm"
        >
          <source src={tweet.video.variants[0].src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {tweet.photos && (
        <div className="flex gap-2 overflow-x-auto">
          {tweet.photos.map((photo) => (
            <img
              key={photo.url}
              src={photo.url}
              title={'Photo by ' + tweet.user.name}
              alt={tweet.text}
              className="h-auto w-full rounded-lg object-cover shadow-sm"
            />
          ))}
        </div>
      )}
      {!tweet.video &&
        !tweet.photos &&
        // @ts-expect-error - tweet.card is not defined
        tweet?.card?.binding_values?.thumbnail_image_large?.image_value.url && (
          <img
            // @ts-expect-error - tweet.card is not defined
            src={tweet.card.binding_values.thumbnail_image_large.image_value.url}
            className="h-auto max-h-40 w-full rounded-lg object-cover shadow-sm"
            alt={tweet.text}
          />
        )}
    </div>
  );
};

export const DynamicTweet = ({
  tweet,
  className,
  ...props
}: {
  tweet: Tweet;
  components?: TwitterComponents;
  className?: string;
}) => {
  const enrichedTweet = enrichTweet(tweet);
  return (
    <div
      className={cn(
        'flex w-full flex-col gap-2 overflow-hidden rounded-xl bg-[var(--surface-secondary)] p-4 transition-all duration-200',
        className,
      )}
      {...props}
    >
      <TweetHeader tweet={enrichedTweet} />
      <TweetBody tweet={enrichedTweet} />
      <TweetMedia tweet={enrichedTweet} />
    </div>
  );
};

export const DynamicClientTweetCard = ({
  id,
  components,
  fallback = <TweetSkeleton />,
  onError,
  ...props
}: TweetProps & {
  className?: string;
}) => {
  return (
    <div className="w-full">
      <Suspense fallback={fallback}>
        {/* @ts-expect-error Async Server Component */}
        <DynamicTweetCardInner
          id={id}
          components={components}
          onError={onError}
          {...props}
        />
      </Suspense>
    </div>
  );
};

const DynamicTweetCardInner = async ({
  id,
  components,
  onError,
  ...props
}: TweetProps & {
  className?: string;
}) => {
  const tweet = id
    ? await getTweet(id).catch((err) => {
        if (onError) {
          onError(err);
        } else {
          console.error(err);
        }
      })
    : undefined;

  if (!tweet) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound {...props} />;
  }

  return <DynamicTweet tweet={tweet} {...props} />;
};

export default DynamicClientTweetCard;
