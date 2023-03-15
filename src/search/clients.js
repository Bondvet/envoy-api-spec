/**
 * @apiDefine Clients
 * @apiSuccess {Object[]} clients
 * @apiSuccess {String} clients.id
 * @apiSuccess {String} clients.email
 * @apiSuccess {String} [clients.firstName]
 * @apiSuccess {String} [clients.lastName]
 * @apiSuccess {String} [clients.phoneNumber]
 * @apiSuccess {String} [clients.preferredProvider]
 * @apiSuccess {String} [clients.lastSpokeWith]
 *
 * @apiUse ClientCommunicationLogs
 * @apiUse ClientTasks
 */

/**
 * @apiDefine ClientCommunicationLogs
 * @apiSuccess {Object} clients.lastCommunicationLogs
 * @apiSuccess {String} clients.lastCommunicationLogs.id
 * @apiSuccess {Date} clients.lastCommunicationLogs.date date and time of the
 *  last communication log entry. format: `YYYY-MM-DDTHH:mm:ss`
 */

