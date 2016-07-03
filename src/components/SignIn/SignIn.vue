<template>
  <div class="row sign-in">
    <div class="col s12 m10 offset-m1 l6 offset-l3">
      <div class="card">
        <form v-show="!createForm && !resetPasswordForm">
          <div class="card-title">Sign In</div>
          <div class="card-content">
            <md-input type="email">Email</md-input>
            <md-input type="password">Password</md-input>
            <div class="reset-password" @click="resetPasswordForm = true">I don't remember my password</div>
            <md-btn large class="waves-effect waves-light light-blue darken-4">Connection</md-btn>
            <div class="no-account">You don't have an account ? You can <a @click="createForm = true">create one</a></div>
          </div>
        </form>

        <form v-show="createForm">
          <div class="card-title">Create account</div>
          <div class="go-back">
            <md-button class="btn waves-effect waves-light light-blue darken-4" @click="createForm = false" floating>
              <i class="icon-arrow-left"></i>
            </md-button>
          </div>
          <div class="card-content">
            <md-input type="text">First Name</md-input>
            <md-input type="text">Last Name</md-input>
            <md-input type="email">Email</md-input>
            <md-input type="password">Password</md-input>
            <md-btn large class="waves-effect waves-light light-blue darken-4">Create</md-btn>
          </div>
        </form>

        <form v-show="resetPasswordForm">
          <div class="card-title">Reset your password</div>
          <div class="go-back">
            <md-button class="btn waves-effect waves-light light-blue darken-4" @click="resetPasswordForm = false" floating>
              <i class="icon-arrow-left"></i>
            </md-button>
          </div>
          <div class="card-content">
            <md-input type="text">Email</md-input>
            <md-btn large class="waves-effect waves-light light-blue darken-4">Send an e-mail</md-btn>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        createForm: false,
        resetPasswordForm: false
      }
    }
    // methods: {
    //   example: function () {
    //     // code
    //   }
    // }
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
      font-size: 13px;
      a {
        text-decoration: underline;
        &:hover { cursor: pointer; }
      }
    }
    .go-back {
      position: absolute;
      right: 30px;
      top: 30px;
      i {
        font-size: 15px;
        margin-left: -2px;
        font-weight: bold;
      }
    }
  }
</style>
