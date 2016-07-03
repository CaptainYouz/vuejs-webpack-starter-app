<template>
  <div class="row sign-in">
    <div class="col s12 m10 offset-m1 l6 offset-l3">
      <div class="card">
        <form v-show="!createForm && !resetPasswordForm">
          <div class="card-title">Sign In</div>
          <div class="card-content">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div class="reset-password" @click="resetPasswordForm = true">I don't remember my password</div>
            <md-btn large class="waves-effect waves-light light-blue darken-4">Connection</md-btn>
            <div class="no-account">You don't have an account ? You can <a @click="createForm = true">create one</a></div>
          </div>
        </form>

        <form v-show="createForm">
          <create-account :show-form.sync="createForm"></create-account>
        </form>

        <form v-show="resetPasswordForm">
          <reset-password :show-form.sync="resetPasswordForm"></reset-password>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import CreateAccount from './CreateAccount'
  import ResetPassword from './ResetPassword'

  export default {
    data () {
      return {
        createForm: false,
        resetPasswordForm: false
      }
    },
    methods: {
      signIn: function () {}
    },
    components: {
      CreateAccount,
      ResetPassword
    }
  }
</script>

<style lang="less">
  @import "../../assets/variables";

  .sign-in {
    .card {
      padding: 40px 30px 15px 30px;
      @media screen and (max-width: @screen-s) {
        text-align: center;
        padding: 45px 0;
      }
    }
    .card-content {
      text-align: center;
      .input-field { label { left: 0; }}
      .md-button { margin-top: 40px; }
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
      margin-top: 40px;
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
