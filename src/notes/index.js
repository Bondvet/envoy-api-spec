/**
 * @api {GET} /notes get all notes on a patient's chart
 *
 * @apiName Get Notes
 * @apiGroup Notes
 *
 * @apiUse Auth
 *
 * @apiUse NotesResponse
 */

/**
 * @api {POST} /notes/note add a new note to a patient's chart
 *
 * @apiUse Auth
 *
 * @apiName Add Note
 * @apiGroup Notes
 *
 * @apiBody {String} text content of the note
 * @apiBody {String} patientId ID of the patient
 * @apiBody {String} zendeskNoteId corresponding ID for this note in Zendesk
 *
 * @apiUse NoteResponse
 */

/**
 * @api {POST} /notes/phone-call add a new phone call to a patient's chart
 *
 * @apiUse Auth
 *
 * @apiName Add Phone Call
 * @apiGroup Notes
 *
 * @apiBody {String} text content of the note
 * @apiBody {String} patientId ID of the patient
 * @apiBody {String} zendeskNoteId corresponding ID for this note in Zendesk
 * @apiBody {String} personContacted Name of the person contacted
 * @apiBody {String} reason Reason for the phone call
 *
 * @apiUse NoteResponse
 */

/**
 * @api {POST} /notes/communication-log add a new communication log entry to a patient's chart
 *
 * @apiUse Auth
 *
 * @apiName Add Communication Log
 * @apiGroup Notes
 *
 * @apiBody {String} text content of the note
 * @apiBody {String} patientId ID of the patient
 * @apiBody {String} zendeskNoteId corresponding ID for this note in Zendesk
 * @apiBody {String} personContacted Name of the person contacted
 *
 * @apiUse NoteResponse
 */

