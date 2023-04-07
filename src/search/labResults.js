/**
 * @apiDefine ClientLabResults
 *
 * @apiSuccess {Object[]} clients.labResults
 * @apiSuccess {String} clients.labResults.id
 * @apiSuccess {String[]} [clients.labResults.abnormals]
 * @apiSuccess {String} [clients.labResults.accessionId]
 * @apiSuccess {String} [clients.labResults.code]
 * @apiSuccess {Object[]} [clients.labResults.comments]
 *
 * @apiSuccess {String} clients.labResults.comments.id
 * @apiSuccess {String} clients.labResults.comments.body
 * @apiSuccess {Date} clients.labResults.comments.insertedAt format: `YYYY-MM-DDTHH:mm:ssZ`
 * @apiSuccess {String} clients.labResults.comments.provider name of the provider
 * @apiSuccess {Date} clients.labResults.comments.updatedAt format: `YYYY-MM-DDTHH:mm:ssZ`
 *
 * @apiSuccess {Date} clients.labResults.datetime format: `YYYY-MM-DDTHH:mm:ssZ`
 * @apiSuccess {String} [clients.labResults.externalId]
 * @apiSuccess {Boolean} clients.labResults.hasComments
 * @apiSuccess {Date} clients.labResults.insertedAt format: `YYYY-MM-DDTHH:mm:ssZ`
 * @apiSuccess {String} [clients.labResults.laboratory]
 * @apiSuccess {String} [clients.labResults.location] name of the clinic
 * @apiSuccess {String} [clients.labResults.name]
 * @apiSuccess {String} [clients.labResults.note]
 * @apiSuccess {String} [clients.labResults.patientId]
 * @apiSuccess {String} [clients.labResults.provider]  name of the provider
 * @apiSuccess {String[]} [clients.labResults.unknowns]
 * @apiSuccess {Date} [clients.labResults.updatedAt] format: `YYYY-MM-DDTHH:mm:ssZ`
 */
