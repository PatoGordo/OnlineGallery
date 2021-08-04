<template>
  <div>
    <h2>Welcome to Duck Gallery</h2>
    <p>Your personal online gallery!</p>

    <a href="#">Github</a>
    <a href="#">License</a>

    <button @click="$router.push('/images')">My gallery</button>
  </div>
</template>

<script lang="ts">
import { auth } from "../services/firebase";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data() {
    var _user

    auth.onAuthStateChanged((user) => {
      if(user) {
        this.$router.push('/profile')
      }
    })

    return {
      user: _user,
    };
  },
});
</script>

<style lang="scss" scoped></style>
