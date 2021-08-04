<template>
  <navbar />
  <router-view class="page"></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from './components/Navbar.vue'

export default defineComponent({
  name: "App",
  components: {
    Navbar,
  }
});
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  margin-top: 65px;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h2 {
    &:first-child {
      text-align: center;
      margin-bottom: 1rem;
    }
  }
}
</style>
