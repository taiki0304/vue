var counterButton = Vue.extend({
  template: '<span>{{counter}}個<button v-on:click="addToCart">Add</button></span>',
  data: function() {
    return {
      counter: 0
    }
  },
  methods: {
    addToCart: function() {
      this.counter += 1
      this.$emit('increment')
    }
  },
})

new Vue({
  el: '#fruit-counter',
  components: {
    'counter-button': counterButton
  },
  data: {
    total: 0,
    fruits: [
      {name: 'apple'},
      {name: 'orange'}
    ]
  },
  methods: {
    incrementCartStatus: function() {
      this.total += 1
    }
  }
})
