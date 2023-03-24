/**
 * @apiDefine ClientPatients
 * @apiSuccess {Object[]} clients.patients
 * @apiSuccess {String} clients.patients.id
 * @apiSuccess {String} [clients.patients.name]
 * @apiSuccess {String} [clients.patients.species]
 * @apiSuccess {String} [clients.patients.age]
 * @apiSuccess {String} [clients.patients.breed]
 * @apiSuccess {Object} [clients.patients.latestWeight]
 * @apiSuccess {String = "G", "KG", "LB", "M2"} [clients.patients.latestWeight.unit]
 * @apiSuccess {number} [clients.patients.latestWeight.value]
 * @apiSuccess {Boolean} [clients.patients.neutered]
 * @apiSuccess {String = "FEMALE", "MALE", "UNKNOWN"} [clients.patients.sex]
 */
