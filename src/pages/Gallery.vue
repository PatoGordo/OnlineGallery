<template>
  <div>
    <h2>Component Gallery</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { auth } from '../services/firebase'

export default defineComponent({
  name: 'Gallery',
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