import Route from '@ember/routing/route'

export default Route.extend({
  model: function() {
    return [
      { name: 'Ray' },
      { name: 'Kris' },
      { name: 'Chris' },
      { name: 'Luke' }
    ]
  }
})
