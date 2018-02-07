import Controller from '@ember/controller'

export default Controller.extend({
  isCool: false,
  actions: {
    toggleCool: function() {
      this.toggleProperty('isCool')
    }
  }
})
