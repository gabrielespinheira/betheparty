'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { status: true }
})

// Sessions
Route.post('sessions', 'SessionController.login')

// Company
Route.get('companies', 'CompanyController.index')
Route.post('companies', 'CompanyController.store')

// Party
Route.get('parties', 'PartyController.index')
Route.post('parties', 'PartyController.store')
Route.delete('parties/:id', 'PartyController.destroy')

// Profile
Route.get('profile', 'ProfileController.index')
