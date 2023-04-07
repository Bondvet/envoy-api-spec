/**
 * @apiDefine ConversationsResponse
 *
 * @apiSuccess {Object[]} conversations new conversations created
 *  since the requested date and time
 *
 * @apiSuccess {String} conversations.id
 * @apiSuccess {Boolean} conversations.closed
 * @apiSuccess {Date} [conversations.closedAt] format: `YYYY-MM-DDTHH:mm:ssZ`
 * @apiSuccess {String} [conversations.zendeskTicketId]
 *  if applicable, the Zendesk ticket ID of this communication log entry
 * @apiSuccess {Date} conversations.insertedAt format: `YYYY-MM-DDTHH:mm:ssZ`
 * @apiSuccess {String="app","email","facebook","fax","other","postcard","sms","website_chat"} conversations.medium
 * @apiSuccess {String} conversations.subject Subject of the conversation
 * @apiSuccess {String} [conversations.location] name of the clinic of the conversation
 * @apiSuccess {String} [conversations.patient] name of the patient of the conversation
 *
 * @apiSuccess {Object[]} conversations.messages
 * @apiSuccess {String} conversations.messages.id
 * @apiSuccess {String} conversations.messages.conversationId
 * @apiSuccess {String} conversations.messages.body content of the message
 * @apiSuccess {String} conversations.messages.deliveryStatus
 * @apiSuccess {Date} [conversations.messages.deletedAt] format: `YYYY-MM-DDTHH:mm:ssZ`
 * @apiSuccess {Date} conversations.messages.insertedAt format: `YYYY-MM-DDTHH:mm:ssZ`
 * @apiSuccess {Boolean} conversations.messages.isAutomatedMessage
 *  whether this is an automated message
 * @apiSuccess {Boolean} conversations.messages.draft whether this message is a draft
 * @apiSuccess {String} conversations.messages.recipientAddress
 * @apiSuccess {String} conversations.messages.senderAddress
 * @apiSuccess {Boolean} conversations.messages.inbound
 *  `true` if the client sent this message,
 *  `false` if we sent this message to the client
 *
 * @apiSuccess {Object[]} messages new messages added to previously
 *  existing conversations since the requested date and time
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

/**
 * @apiDefine ConversationResponse
 *
 * @apiUse Conversation
 */

/**
 * @apiDefine MessageResponse
 *
 * @apiUse Message
 */
