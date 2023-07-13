/**
 * @api {GET} /notes/:patientId get all notes on a patient's chart
 *
 * @apiName Get Notes
 * @apiGroup Notes
 *
 * @apiUse Auth
 *
 * @apiUse NotesResponse
 */

/**
 * @api {POST} /notes/:patientId/note add a new note to a patient's chart
 *
 * @apiUse Auth
 *
 * @apiName Add Note
 * @apiGroup Notes
 *
 * @apiParam {String} patientId ID of the patient
 *
 * @apiBody {String} text content of the note
 * @apiBody {String} [zendeskNoteId] corresponding ID for this note in Zendesk
 * @apiBody {String} [ticketRequester] Name of the person who requested the ticket.
 * (will be stored in the `fieldData` property of the note, as `Ticket Requester` field)
 * @apiBody {String} [ticketAssignee] Name of assignee of the ticket
 * (will be stored in the `fieldData` property of the note, as `Ticket Assignee` field)
 * @apiBody {String} [ticketSubject] Subject of the ticket
 * (will be stored in the `fieldData` property of the note, as `Ticket Subject` field)
 *
 * @apiUse NoteResponse
 */

/**
 * @api {POST} /notes/:patientId/phone-call add a new phone call to a patient's chart
 *
 * @apiUse Auth
 *
 * @apiName Add Phone Call
 * @apiGroup Notes
 *
 * @apiParam {String} patientId ID of the patient
 *
 * @apiBody {String} text content of the note
 * @apiBody {String} [zendeskNoteId] corresponding ID for this note in Zendesk
 * @apiBody {String} personContacted Name of the person contacted
 * @apiBody {String} reason Reason for the phone call
 * @apiBody {String} [ticketRequester] Name of the person who requested the ticket.
 * (will be stored in the `fieldData` property of the note, as `"`Ticket Requester`"` field)
 * @apiBody {String} [ticketAssignee] Name of assignee of the ticket
 * (will be stored in the `fieldData` property of the note, as `Ticket Assignee` field)
 * @apiBody {String} [ticketSubject] Subject of the ticket
 * (will be stored in the `fieldData` property of the note, as `Ticket Subject` field)
 *
 * @apiUse NoteResponse
 */

/**
 * @api {POST} /notes/:patientId/communication-log add a new communication log entry to a patient's chart
 *
 * @apiUse Auth
 *
 * @apiName Add Communication Log
 * @apiGroup Notes
 *
 * @apiParam {String} patientId ID of the patient
 *
 * @apiBody {String} text content of the note
 * @apiBody {String} [zendeskNoteId] corresponding ID for this note in Zendesk
 * @apiBody {String} personContacted Name of the person contacted
 * @apiBody {String} [ticketRequester] Name of the person who requested the ticket.
 * (will be stored in the `fieldData` property of the note, as `"`Ticket Requester`"` field)
 * @apiBody {String} [ticketAssignee] Name of assignee of the ticket
 * (will be stored in the `fieldData` property of the note, as `Ticket Assignee` field)
 * @apiBody {String} [ticketSubject] Subject of the ticket
 * (will be stored in the `fieldData` property of the note, as `Ticket Subject` field)
 *
 * @apiUse NoteResponse
 */

