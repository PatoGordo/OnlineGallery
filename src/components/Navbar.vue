<template>
  <nav>
    <h1 @click="$router.push('/')">🦆 Gallery</h1>
    <ul>
      <li v-for="(route, key) in routes" :key="key" :visible="route.title? true : false && route.protect">
        <router-link :to="route.path" v-if="route.title">{{ route.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AuthController } from '../controllers/AuthController'
import { routes } from '../router/routes'

export default defineComponent({
  name: 'Navbar',
  data() {
    return {
      routes,
      user: AuthController.user,
    }
  }
})
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: #7E57C2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  color: #fff;
  h1 {
    cursor: pointer;
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 8px;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        color: #fff;
        text-decoration: none;
        background: #673AB7;
        padding: 8px 16px;
        border-radius: 9999px;
        transition: filter .2s;
        &:hover {
          filter: brightness(0.9);
        }
      }
      &[visible="false"] {
        display: none;
      }
    }
  }
}
</style>