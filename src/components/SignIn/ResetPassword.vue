<template>
  <div class="card-title">Reset your password</div>
  <div class="go-back">
    <md-button class="btn waves-effect waves-light light-blue darken-4" @click="showForm = false" floating>
      <i class="icon-arrow-left"></i>
    </md-button>
  </div>
  <div class="card-content">
    <input type="text" placeholder="Email" />
    <md-btn large class="waves-effect waves-light light-blue darken-4">Send an e-mail</md-btn>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      resetPassword: function () {}
    },
    props: ['showForm']
  }
</script>