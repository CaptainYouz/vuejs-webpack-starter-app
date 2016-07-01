<template>
  <div class="row sign-in">
    <div class="col s12 m10 offset-m1 l6 offset-l3">
      <form class="card">
        <div class="card-title">Sign In</div>
        <div class="card-content">
          <md-input type="email">Email</md-input>
          <md-input type="password">Password</md-input>
          <div class="reset-password">I don't remember my password</div>
          <md-btn large class="waves-effect waves-light light-blue darken-4">Connection</md-btn>
          <div class="no-account">You don't have an account ? You can <a href="">create one</a></div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  @import "../../assets/variables";

  .sign-in {
    .card {
      padding: 45px 30px;
      @media screen and (max-width: @screen-s) {
        text-align: center;
        padding: 45px 0;
      }
    }
    .card-content {
      text-align: center;
      .input-field { label { left: 0; }}
      .md-button { margin: 35px 0; }
    }
    .reset-password {
      text-align: right;
      font-size: 12px;
      padding-top: 10px;
      font-style: italic;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .no-account {
      font-size: 12px;
      a { text-decoration: underline; }
    }
  }
</style>
