'use strict'

class StoreParty {
  get rules() {
    return {
      title: 'required|min:3|max:255',
      description: 'required|min:3|max:255',
      value: 'required|number',
    }
  }

  get messages() {
    return {
      'title.required': 'You must provide a title',
      'title.min': 'Title is too short',
      'title.max': 'title is too long',
      'description.required': 'You must provide a description',
      'description.min': 'Description is too short',
      'description.max': 'Description is too long',
      'value.required': 'You must provide a value',
      'value.number': 'Value must be a number',
    }
  }

  get validateAll() {
    return true
  }
}

module.exports = StoreParty
