
/**
 * @apiDefine ClientConversations
 * @apiSuccess {Object[]} clients.conversations
 * @apiSuccess {String} clients.conversations.id
 * @apiSuccess {Boolean} clients.conversations.closed
 * @apiSuccess {Date} [clients.conversations.closedAt] format: `YYYY-MM-DDTHH:mm:ss`
 * @apiSuccess {String} [clients.conversations.zendeskTicketId]
 *  if applicable, the Zendesk ticket ID of this communication log entry
 * @apiSuccess {Date} clients.conversations.insertedAt format: `YYYY-MM-DDTHH:mm:ss`
 * @apiSuccess {String="app","email","facebook","fax","other","postcard","sms","website_chat"} clients.conversations.medium
 * @apiSuccess {String} clients.conversations.subject Subject of the conversation
 * @apiSuccess {String} [clients.conversations.location] name of the clinic of the conversation
 * @apiSuccess {String} [clients.conversations.patient] name of the patient of the conversation
 *
 * @apiSuccess {Object[]} clients.conversations.messages
 * @apiSuccess {String} clients.conversations.messages.id
 * @apiSuccess {String} clients.conversations.messages.conversationId
 * @apiSuccess {String} clients.conversations.messages.body content of the message
 * @apiSuccess {String} clients.conversations.messages.deliveryStatus
 * @apiSuccess {Date} [clients.conversations.messages.deletedAt] format: `YYYY-MM-DDTHH:mm:ss`
 * @apiSuccess {Date} clients.conversations.messages.insertedAt format: `YYYY-MM-DDTHH:mm:ss`
 * @apiSuccess {Boolean} clients.conversations.messages.isAutomatedMessage
 *  whether this is an automated message
 * @apiSuccess {Boolean} clients.conversations.messages.draft whether this message is a draft
 * @apiSuccess {String} clients.conversations.messages.recipientAddress
 * @apiSuccess {String} clients.conversations.messages.senderAddress
 * @apiSuccess {Boolean} clients.conversations.messages.inbound
 *  `true` if the client sent this message,
 *  `false` if we sent this message to the client
 */
