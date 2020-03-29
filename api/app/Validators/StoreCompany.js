'use strict'

class StoreCompany {
  get rules() {
    return {
      name: 'required|min:3|max:255',
      email: 'required|email|unique:companies|max:255',
      whatsapp: 'required|min:9',
      city: 'required|max:255',
      uf: 'required|min:2|max:2',
    }
  }

  get messages() {
    return {
      'name.required': 'You must provide a name',
      'name.min': 'Name is too short',
      'name.max': 'Name is too long',
      'email.required': 'You must provide a email address',
      'email.email': 'You must provide a valid email address',
      'email.unique': 'Email already exists',
      'email.max': 'Email is too long',
      'whatsapp.required': 'You must provide a Whatsapp number',
      'whatsapp.min': 'Whatsapp number is too short',
      'city.required': 'You must provide a city name',
      'city.max': 'City name is too long',
      'uf.required': 'You must provide a uf code',
      'uf.min': 'You must provide a valid uf code',
      'uf.max': 'You must provide a valid uf code',
    }
  }

  get validateAll() {
    return true
  }
}

module.exports = StoreCompany
