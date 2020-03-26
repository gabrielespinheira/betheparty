'use strict'

const Incident = use('App/Models/Incident')

class IncidentController {
  async index({ request }) {
    const { page = 1 } = request.get()

    // paginate 5 items per page
    return await Incident.query()
      .with('ong')
      .paginate(page, 5)
  }

  async store({ request, response }) {
    const { title, description, value } = request.body

    const ong_id = request.header('authorization')

    if (!ong_id) {
      return response.status(401).json({ error: 'Unauthorized' })
    }

    return await Incident.create({ title, description, value, ong_id })
  }

  async destroy({ request, response }) {
    const { id } = request.params
    const ong_id = request.header('Authorization')
    const incident = await Incident.find(id)

    if (ong_id !== incident.ong_id) {
      return response.status(401).json({ error: 'Unauthorized' })
    }

    return await incident.delete()
  }
}

module.exports = IncidentController
