'use strict'

const Party = use('App/Models/Party')

class ProfileController {
  async index({ request, response }) {
    const company_id = request.header('Authorization')

    if (!company_id) {
      return response.status(401).json({ error: 'Unauthorized' })
    }

    return await Party.query()
      .where('company_id', company_id)
      .fetch()
  }
}

module.exports = ProfileController
