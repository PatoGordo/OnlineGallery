<template>
  <div>
    <h2>Component SignIn</h2>

    <div class="sign-in-methods">
      <button type="button" @click="SignInWithGoogle">
        <icon icon="flat-color-icons:google" />
        Sign-in with Google
      </button>
      <button type="button" @click="SignInWithGithub">
        <icon icon="ci:github" />
        Sign-in with Github
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { auth, githubProvider, googleProvider } from "../services/firebase";
import { Icon } from '@iconify/vue/dist/iconify';

export default defineComponent({
  name: "SignIn",
  components: {
    Icon,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async SignInWithGoogle() {
      try {
        await auth.signInWithPopup(googleProvider);

        this.$router.push('/profile')
      } catch (err) {
        alert(err);
      }
    },
    async SignInWithGithub() {
      try {
        await auth.signInWithPopup(githubProvider);

        this.$router.push('/profile')
      } catch (err) {
        alert(err);
      }
    },
  },
  created() {
    auth.onAuthStateChanged((user) => {
      if(user) {
        this.$router.push('/profile')
      }
    })
  }
});
</script>

<style lang="scss" scoped>
.sign-in-methods {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(240px, 100% - 32px);
  gap: 8px;
  button {
    border-radius: 9999px;
    border: 1px solid #ccc;
    width: 100%;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    font-size: 16px;
    cursor: pointer;
    transition: filter .2s;
    &:hover {
      filter: brightness(0.8);
    }
    &:focus {
      filter: brightness(0.9);
    }
    svg {
      height: 32px;
      width: 32px;
    }
  }
}
</style>
