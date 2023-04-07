/**
 * @api {get} /conversations get all new conversations since a given date and time
 * @apiName Conversations
 * @apiGroup Conversations
 *
 * @apiQuery {Date} since date and time in format `YYYY-MM-DDTHH:mm:ssZ`
 *
 * @apiUse Auth
 *
 * @apiUse ConversationsResponse
 */

/**
 * @api {POST} /conversations create a new conversation
 *
 * @apiUse Auth
 *
 * @apiName Create Conversation
 * @apiGroup Conversations
 *
 * @apiBody {String} clientId
 * @apiBody {String} patientId
 * @apiBody {String} subject
 * @apiBody {String="app","email","facebook","fax","other","postcard","sms","website_chat"} medium
 *
 * @apiUse Auth
 *
 * @apiUse ConversationResponse
 */

/**
 * @api {POST} /conversations/:conversationId add a new message to an existing conversation
 *
 * @apiUse Auth
 *
 * @apiName Add message
 * @apiGroup Conversations
 *
 * @apiParam {String} conversationId
 *
 * @apiBody {String} body
 * @apiBody {String} zendeskTicketId
 *
 * @apiUse MessageResponse
 */
