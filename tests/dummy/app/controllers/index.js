import Ember from 'ember';

export default Ember.Controller.extend({
  isCool: false,
  actions: {
    toggleCool: function(){
      this.toggleProperty('isCool');
    }
  }
});
