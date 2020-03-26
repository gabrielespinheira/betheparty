'use strict'

const Ong = use('App/Models/Ong')

class SessionController {
  async login({ request, response }) {
    const { code } = request.body

    const ong = await Ong.query()
      .where('code', code)
      .first()

    if (!ong) {
      return response.state(400).json({ error: 'ONG not found' })
    }

    return ong
  }
}

module.exports = SessionController
