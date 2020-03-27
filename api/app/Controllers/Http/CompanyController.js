'use strict'

const Encryption = use('Encryption')
const Company = use('App/Models/Company')

class CompanyController {
  async index() {
    return await Company.all()
  }

  async store({ request }) {
    const { name, email, whatsapp, city, uf } = request.body
    const code = Encryption.encrypt(name)

    await Company.create({ code, name, email, whatsapp, city, uf })

    return { code }
  }

  async show() {}

  async update() {}

  async destroy() {}
}

module.exports = CompanyController
