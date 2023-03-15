/**
 * @api {get} /search/:type search a client either through email or phone number
 * @apiName Search client
 * @apiGroup Search
 *
 * @apiParam {String="phone","email"} type
 * @apiQuery {String} value
 * @apiUse Auth
 *
 * @apiSuccess {Number} total
 * @apiUse ClientsResponse
 *
 */
