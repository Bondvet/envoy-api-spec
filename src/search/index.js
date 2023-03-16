/**
 * @api {get} /search/:type search a client either through email or phone number
 * @apiName Search client
 * @apiGroup Search
 *
 * @apiParam {String="phone","email"} type type of search
 * @apiQuery {String} value search value
 * @apiUse Auth
 *
 * @apiUse ClientsResponse
 *
 */
