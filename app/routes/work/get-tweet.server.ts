import { data } from "react-router";
import { fetchTweet, type Tweet } from "~/components/react-twitter/api";

export default async function getTweet(id: string): Promise<Tweet> {
  try {
    const { data: tweet, tombstone, notFound } = await fetchTweet(id);
    if (notFound) throw new Error("Tweet not found!");
    if (tombstone) throw new Error("Tweet has been made private!");
    if (tweet === undefined) throw new Error("Tweet is undefined!");
    return tweet;
  } catch (err) {
    console.error(err);
    throw data("Failed to fetch tweet!", { status: 500 });
  }
}
