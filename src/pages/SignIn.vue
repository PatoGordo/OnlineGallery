<template>
  <div>
    <h2>Component SignIn</h2>

    <button type="button" @click="SignInWithGoogle">Sign-in with Google</button>
    <button type="button" @click="SignInWithGithub">Sign-in with Github</button>
    
    <form @submit.prevent="SignIn">
      <input
        v-model="email"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
      />
      <input
        v-model="password"
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        required
      />

      <button type="submit">Sign in</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AuthController } from "../controllers/AuthController";

export default defineComponent({
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async SignIn() {
      await AuthController.SignInWithEmailAndPassword(
        this.email,
        this.password,
      );
    },
    async SignInWithGoogle() {
      await AuthController.SignInWithProviders('google')
    },
    async SignInWithGithub() {
      await AuthController.SignInWithProviders('github')
    },
  },
  created() {
    if(AuthController.user) {
      this.$router.push('/profile')
    }
  }
});
</script>

<style lang="scss" scoped></style>
