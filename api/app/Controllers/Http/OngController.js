'use strict'

const Encryption = use('Encryption')
const Ong = use('App/Models/Ong')

class OngController {
  async index() {
    return await Ong.all()
  }

  async store({ request }) {
    const { name, email, whatsapp, city, uf } = request.body
    const code = Encryption.encrypt(name)

    await Ong.create({ code, name, email, whatsapp, city, uf })

    return { code }
  }

  async show() {}

  async update() {}

  async destroy() {}
}

module.exports = OngController
