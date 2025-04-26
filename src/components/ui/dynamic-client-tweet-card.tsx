"use client";

import { TweetProps, useTweet } from "react-tweet";
import {
  DynamicTweet,
  TweetNotFound,
  TweetSkeleton,
} from "@/components/ui/dynamic-tweet-card";

const DynamicClientTweetCard = ({
  id,
  apiUrl,
  fallback = <TweetSkeleton />,
  components,
  fetchOptions,
  onError,
  ...props
}: TweetProps & { className?: string }) => {
  const { data, error, isLoading } = useTweet(id, apiUrl, fetchOptions);

  if (isLoading) return fallback;

  if (error || !data) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound error={onError ? onError(error) : error} />;
  }

  return <DynamicTweet tweet={data} components={components} {...props} />;
};

export default DynamicClientTweetCard;