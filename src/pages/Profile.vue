<template>
  <div>
    <h2>Component Profile</h2>

    <button @click="signOut">Sign Out</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { auth } from '../services/firebase'

export default defineComponent({
  name: 'Profile',
  methods: {
    async signOut() {
      await auth.signOut()
    }
  },
  created() {
    auth.onAuthStateChanged((user) => {
      if(!user) {
        this.$router.push('/sign-in')
      }
    })
  }
})
</script>

<style lang="scss" scoped></style>