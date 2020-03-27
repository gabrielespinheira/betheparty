'use strict'

const Company = use('App/Models/Company')

class SessionController {
  async login({ request, response }) {
    const { code } = request.body

    const company = await Company.query()
      .where('code', code)
      .first()

    if (!company) {
      return response.status(400).json({ error: 'Company not found' })
    }

    return company
  }
}

module.exports = SessionController
