'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ong extends Model {
  incidents() {
    return this.hasMany('App/Models/Incident')
  }

  static get hidden() {
    return ['created_at', 'updated_at']
  }
}

module.exports = Ong
