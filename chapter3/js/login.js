Vue.component('user-login', {
  template: '#login-template',
  data: function() {
    return {
      userId: '',
      password: ''
    }
  },
  methods: {
    login: function() {
      auth.login(this.userId, this.password);
    }
  }
})

var auth = {
  login: function(userId, password) {
    alert("ユーザーID:" + userId + "¥n" + "パスワード:" + password);
  }
}

new Vue({
  el: "#login"
})
