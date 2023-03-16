/**
 * @apiDefine Clients
 * @apiSuccess {Object[]} clients
 * @apiSuccess {String} clients.id internal client ID
 * @apiSuccess {String} clients.email client email address
 * @apiSuccess {String} [clients.firstName] client first name
 * @apiSuccess {String} [clients.lastName] client last name
 * @apiSuccess {String} [clients.phoneNumber] client phone number
 * @apiSuccess {String} [clients.preferredProvider]
 *  name of the client's preferred provider
 * @apiSuccess {String} [clients.lastSpokeWith] name of the provider
 *  who last spoke to the client
 *
 * @apiUse ClientConversations
 * @apiUse ClientLabResults
 * @apiUse ClientMedications
 * @apiUse ClientTasks
 * @apiUse ClientVisits
 */

