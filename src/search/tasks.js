/**
 * @apiDefine ClientTasks
 *
 * @apiSuccess {Object[]} clients.tasks
 * @apiSuccess {String} clients.tasks.id
 * @apiSuccess {Boolean} clients.tasks.done
 * @apiSuccess {String} [clients.tasks.creator]
 * name of the provider who created the task
 * @apiSuccess {String} [clients.tasks.completedBy]
 * name of the provider who completed the task
 * @apiSuccess {String[]} [clients.tasks.assignees]
 * names of the provider to whom the task is assigned
 * @apiSuccess {Date} clients.tasks.dueDate  format: `YYYY-MM-DDTHH:mm:ss`
 * @apiSuccess {Date} clients.tasks.insertedAt  format: `YYYY-MM-DDTHH:mm:ss`
 * @apiSuccess {String} clients.tasks.text
 * @apiSuccess {Date} clients.tasks.updatedAt  format: `YYYY-MM-DDTHH:mm:ss`
 * @apiSuccess {String} patientId
 */
