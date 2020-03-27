'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PartiesSchema extends Schema {
  up() {
    this.create('parties', table => {
      table.increments()
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.decimal('value').notNullable()
      table
        .integer('company_id')
        .references('id')
        .inTable('companies')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('parties')
  }
}

module.exports = PartiesSchema
