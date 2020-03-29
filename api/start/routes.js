'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { status: true }
})

// Sessions
Route.post('sessions', 'SessionController.login').validator('LoginSession')

// Company
Route.get('companies', 'CompanyController.index')
Route.post('companies', 'CompanyController.store').validator('StoreCompany')

// Party
Route.get('parties', 'PartyController.index').validator('IndexParty')
Route.post('parties', 'PartyController.store').validator('StoreParty')
Route.delete('parties/:id', 'PartyController.destroy')

// Profile
Route.get('profile', 'ProfileController.index')
