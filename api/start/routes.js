'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { status: true }
})

// Sessions
Route.post('sessions', 'SessionController.login')

// ONGS
Route.get('ongs', 'OngController.index')
Route.post('ongs', 'OngController.store')

// Incidents
Route.get('incidents', 'IncidentController.index')
Route.post('incidents', 'IncidentController.store')
Route.delete('incidents/:id', 'IncidentController.destroy')

// Profile
Route.get('profile', 'ProfileController.index')
