'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OngSchema extends Schema {
  up() {
    this.create('ongs', table => {
      table.increments()
      table
        .string('code')
        .notNullable()
        .unique()
      table
        .string('name')
        .notNullable()
        .unique()
      table
        .string('email')
        .notNullable()
        .unique()
      table.string('whatsapp').notNullable()
      table.string('city').notNullable()
      table.string('uf', 2).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('ongs')
  }
}

module.exports = OngSchema
