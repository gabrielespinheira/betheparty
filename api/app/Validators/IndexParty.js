'use strict'

class IndexParty {
  get rules() {
    return {
      page: 'number',
    }
  }

  get messages() {
    return {
      'page.number': 'Page should be a number',
    }
  }

  get validateAll() {
    return true
  }
}

module.exports = IndexParty
