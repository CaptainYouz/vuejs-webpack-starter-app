<template>
  <div class="card-title">Create account</div>
  <div class="go-back">
    <md-button class="btn waves-effect waves-light light-blue darken-4" @click="showForm = false" floating>
      <i class="icon-arrow-left"></i>
    </md-button>
  </div>
  <div class="card-content">
    <input v-model="name" type="text" placeholder="Username" />
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <md-btn @click="createAccount()" large class="waves-effect waves-light light-blue darken-4">Create</md-btn>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: '',
        email: '',
        password: ''
      }
    },
    methods: {
      createAccount: function () {
        console.log('im hrefre', this.name)
      }
    },
    props: ['showForm']
  }
</script>
