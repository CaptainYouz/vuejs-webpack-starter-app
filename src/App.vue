<template>
  <div class="app-content">
    <div class="row logo">
      <div class="col s12">
        <i class="large material-icons light-blue-text text-darken-4">person_pin</i>
      </div>
    </div>
    <sign-in></sign-in>
  </div>
</template>

<script>
import SignIn from './components/SignIn/SignIn'

export default {
  components: {
    SignIn
  }
}
</script>

<style lang="less">
@color: #2c3e50;

.app-content {
  padding-top: 70px;
  .logo { text-align: center; }
}
</style>
