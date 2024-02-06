<template>
  <div>
    <img class="w-64" src="../assets/thanks.png" alt="thank you" />
    <h1 class="title-font sm:text-xl text-3xl mt-8 font-medium text-white">
      {{ $t('addSteps.finalStep1') }}
    </h1>
  </div>
</template>
<style scoped>
img {
  margin: 1em;
}
.is-active {
  box-shadow: 0 0 12px #ddd;
}
</style>
<script>
export default {
  data() {
    return {
      activeTab: 0,
    }
  },
  methods: {
    goToStep: function(step) {
      this.$emit('currentStepUp', step)
    },
    select: function(choice) {
      this.$emit('choice', choice)
    },
  },
}
</script>
