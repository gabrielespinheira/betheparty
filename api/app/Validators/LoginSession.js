'use strict'

class LoginSession {
  get rules() {
    return {
      code: 'required|max:255',
    }
  }

  get messages() {
    return {
      'code.required': 'You must provide a code',
      'code.max': 'Your code is too long',
    }
  }
}

module.exports = LoginSession
