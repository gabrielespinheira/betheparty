'use strict'

const Incident = use('App/Models/Incident')

class ProfileController {
  async index({ request, response }) {
    const ong_id = request.header('Authorization')

    if (!ong_id) {
      return response.status(401).json({ error: 'Unauthorized' })
    }

    return await Incident.query()
      .where('ong_id', ong_id)
      .fetch()
  }
}

module.exports = ProfileController
