'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Party extends Model {
  company() {
    return this.belongsTo('App/Models/Company', 'company_id', 'code')
  }
}

module.exports = Party
