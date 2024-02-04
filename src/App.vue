<script>
import { useRoute, useRouter } from 'vue-router'
export default {
  components: {
  },
  data() {
    return {
      router: useRouter(),
      route: useRoute(),
      isActive: true,
    }
  },
  mounted() {
    this.getHP()
  },
  updated() {
    this.getHP()
  },
  methods: {
    async getHP() {
      await this.router.isReady()
      this.router.afterEach((to) => {
        if(to.path === '/') {
          this.isActive= false
        } else {
          this.isActive= true
        }
      })
    },
  }
}
</script>
<style scoped>
.locale-switcher select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
}
.locale-switcher select:hover {
  background: white;
  color: teal;
  cursor: pointer;
}
</style>
<template>
  <div class="min-h-screen bg-gray-900" id="app">
    <header>
      <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
        <div
          :class="isActive ? '' : 'hidden'"
          class="flex items-center flex-no-shrink text-white mr-6"
        >
          <router-link
            to="/"
            class="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <img class="w-12" alt="logo" src="./assets/logo.svg" />
            <span class="font-semibold text-3xl tracking-tight ml-2"
              >Waterfull</span
            >
          </router-link>
        </div>
        <!-- <div>
          <a class="rounded text-white border-white" />
        </div> -->
        <div class="rounded text-white border-white">
          <div class="locale-switcher">
            <select class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded mt-4 sm:mt-0" v-model="$i18n.locale">
              <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale.toUpperCase() }}</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>
