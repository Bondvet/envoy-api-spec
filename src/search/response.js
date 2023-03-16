/**
 * @apiDefine ClientsResponse
 * @apiSuccess {Number} total total number of clients found by
 *  the provided search parameters
 * @apiUse Clients
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "total": 4,
 *         "clients": [
 *             {
 *                 "id": "asdf",
 *                 "firstName": "Jane",
 *                 "lastName": "Doe"
 *             }
 *         ]
 *     }
 */
