import { createRequire } from "https://deno.land/std/node/module.ts";
const require = createRequire(import.meta.url);
const { Client } = require("twitter-api-sdk");

const client = new Client(process.env.TWITTER_BEARER_TOKEN);

await client.tweets.findTweetById("20");
