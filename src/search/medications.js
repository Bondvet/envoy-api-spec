/**
 * @apiDefine ClientMedications
 *
 * @apiSuccess {Object[]} clients.medications
 * @apiSuccess {String} clients.medications.id
 * @apiSuccess {String} [clients.medications.creator] name of the provider
 * @apiSuccess {Boolean} [clients.medications.declined]
 * @apiSuccess {Number} [clients.medications.dispensed]
 * @apiSuccess {String} [clients.medications.dose]
 * @apiSuccess {String} [clients.medications.frequency]
 * @apiSuccess {Boolean} [clients.medications.historical]
 * @apiSuccess {Date} clients.medications.insertedAt format: `YYYY-MM-DDTHH:mm:ss`
 * @apiSuccess {Boolean} [clients.medications.isExternal]
 * @apiSuccess {String} [clients.medications.location] name of the clinic
 * @apiSuccess {String} [clients.medications.lotNumber]
 * @apiSuccess {String} [clients.medications.name]
 * @apiSuccess {String} [clients.medications.note]
 * @apiSuccess {String} [clients.medications.patient] name of the patient
 * @apiSuccess {String} [clients.medications.patientId] id of the patient
 * @apiSuccess {Date} [clients.medications.start] format: `YYYY-MM-DDTHH:mm:ss`
 * @apiSuccess {String="active","any","completed","declined","deleted","pending","refilled","stopped"} [clients.medications.status]
 * @apiSuccess {Date} [clients.medications.stop] format: `YYYY-MM-DDTHH:mm:ss`
 * @apiSuccess {Number} [clients.medications.quantity]
 * @apiSuccess {Date} [clients.medications.updatedAt] format: `YYYY-MM-DDTHH:mm:ss`
 */
