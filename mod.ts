import { getTweet } from "https://kamekyame.github.io/twitter_api_client/api_v2/tweets/lookup.ts";
// import * as moreOfficialApi from "https://raw.githubusercontent.com/PLhery/node-twitter-api-v2/master/src/index.ts";

const bearerToken = process.env.TWITTER_BEARER_TOKEN; // bearerToken

const res = await getTweet(bearerToken, "1067094924124872705" /*,option*/);
