
/**
 * @apiDefine Message
 *
 * @apiSuccess {String} id
 * @apiSuccess {String} conversationId
 * @apiSuccess {String} body content of the message
 * @apiSuccess {String} deliveryStatus
 * @apiSuccess {Date} [deletedAt] format: `YYYY-MM-DDTHH:mm:ss`
 * @apiSuccess {Date} insertedAt format: `YYYY-MM-DDTHH:mm:ss`
 * @apiSuccess {Boolean} isAutomatedMessage
 *  whether this is an automated message
 * @apiSuccess {Boolean} draft whether this message is a draft
 * @apiSuccess {String} recipientAddress
 * @apiSuccess {String} senderAddress
 * @apiSuccess {Boolean} inbound
 *  `true` if the client sent this message,
 *  `false` if we sent this message to the client
 */
