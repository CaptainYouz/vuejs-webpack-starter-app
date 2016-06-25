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
@import "assets/variables";

.app-content {
  padding-top: 70px;
  @media screen and (max-width: @screen-s) { padding-top: 10px; }
  .logo { text-align: center; }
}
</style>
