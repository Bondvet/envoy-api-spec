/**
 * @api {get} /search/:type search a client either through email or phone number
 * @apiName Search client
 * @apiGroup Search
 *
 * @apiParam {String="phone","email"} type type of search
 * @apiQuery {String} value search value. in the case that `value` is a phone number,
 * please make sure to properly format it in
 * [E.164](https://support.zendesk.com/hc/en-us/articles/4408823756570-What-are-the-accepted-phone-number-formats-for-Talk-#:~:text=164%20format.-,E.,164%20format%20is%20%2B16175551212.)
 * format
 * @apiUse Auth
 *
 * @apiUse ClientsResponse
 *
 */
