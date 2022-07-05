import { getTweet } from "https://kamekyame.github.io/twitter_api_client/api_v2/tweets/lookup.ts";
const bearerToken = Deno.env.get("TWITTER_BEARER_TOKEN"); // bearerToken

if (!bearerToken) {
  throw Error("twitter token required");
}

const res = await getTweet(bearerToken, Deno.args[0]);
console.log(res);
