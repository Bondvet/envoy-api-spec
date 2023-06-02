/**
 * @apiDefine Note
 *
 * @apiSuccess {String} id
 * @apiSuccess {Date} datetime format: `YYYY-MM-DDTHH:mm:ssZ`
 * @apiSuccess {Boolean} deleted
 * @apiSuccess {String} fieldData additional JSON payload
 * @apiSuccess {String} [location] name of the clinic of the note
 * @apiSuccess {String} [provider] name of the provider of the note
 * @apiSuccess {String} text
 * @apiSuccess {String} [zendeskNoteId] corresponding ID for this note in Zendesk
 * @apiSuccess {String} title
 */

/**
 * @apiDefine Notes
 *
 * @apiSuccess {Object[]} notes notes on the patient's chart
 * @apiSuccess {String} notes.id
 * @apiSuccess {Date} notes.datetime format: `YYYY-MM-DDTHH:mm:ssZ`
 * @apiSuccess {Boolean} notes.deleted
 * @apiSuccess {String} notes.fieldData additional JSON payload
 * @apiSuccess {String} [notes.location] name of the clinic of the note
 * @apiSuccess {String} [notes.provider] name of the provider of the note
 * @apiSuccess {String} notes.text
 * @apiSuccess {String} notes.title
 * @apiSuccess {String} [notes.zendeskNoteId] corresponding ID for this note in Zendesk
 */

