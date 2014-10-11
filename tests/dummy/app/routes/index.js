import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      { name: 'Ray' },
      { name: 'Kris' },
      { name: 'Stef' },
      { name: 'Denis' },
      { name: 'Luke' }
    ];
  }
});
