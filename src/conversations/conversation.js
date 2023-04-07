
/**
 * @apiDefine Conversation
 *
 * @apiSuccess {String} id
 * @apiSuccess {Boolean} closed
 * @apiSuccess {Date} [closedAt] format: `YYYY-MM-DDTHH:mm:ssZ`
 * @apiSuccess {String} [zendeskTicketId]
 *  if applicable, the Zendesk ticket ID of this communication log entry
 * @apiSuccess {Date} insertedAt format: `YYYY-MM-DDTHH:mm:ssZ`
 * @apiSuccess {String="app","email","facebook","fax","other","postcard","sms","website_chat"} medium
 * @apiSuccess {String} subject Subject of the conversation
 * @apiSuccess {String} [location] name of the clinic of the conversation
 * @apiSuccess {String} [patient] name of the patient of the conversation
 * @apiSuccess {String} [patientId] ID of the patient of the conversation
 *
 * @apiSuccess {Object[]} messages
 * @apiSuccess {String} messages.id
 * @apiSuccess {String} messages.conversationId
 * @apiSuccess {String} messages.body content of the message
 * @apiSuccess {String} messages.deliveryStatus
 * @apiSuccess {Date} [messages.deletedAt] format: `YYYY-MM-DDTHH:mm:ssZ`
 * @apiSuccess {Date} messages.insertedAt format: `YYYY-MM-DDTHH:mm:ssZ`
 * @apiSuccess {Boolean} messages.isAutomatedMessage
 *  whether this is an automated message
 * @apiSuccess {Boolean} messages.draft whether this message is a draft
 * @apiSuccess {String} messages.recipientAddress
 * @apiSuccess {String} messages.senderAddress
 * @apiSuccess {Boolean} messages.inbound
 *  `true` if the client sent this message,
 *  `false` if we sent this message to the client
 */
