<template>
  <div>
    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
      {{ $t('addSteps.step4.text1') }}
    </h1>
    <div class="flex flex-col flex-wrap justify-center">
      <MapStep v-on:coor="address($event)" />
    </div>
    <div class="flex justify-center mx-auto flex px-5 py-8">
      <a @click.prevent="goToStep(3)" ref="previous" href="/"
        ><img class="steparr w-16" src="../assets/previous.svg" alt="previous"
      /></a>
      <a @click.prevent="goToStep(5)" ref="next" href="/"
        ><img class="steparr w-16" src="../assets/next.svg" alt="next"
      /></a>
    </div>
  </div>
</template>
<style scoped>
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  99% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(.9);
  }
}
a, img:hover {
  animation: pulse 0.1s linear;
}
.steparr {
  border: 0.1em solid #f7f7f7;
  border-radius: 100%;
  background: rgb(199, 233, 228);
  background: radial-gradient(
    circle,
    rgba(199, 233, 228, 1) 20%,
    rgb(0, 47, 75) 67%
  );
  margin: 1em;
  filter: brightness(60%);
}
img:hover {
  cursor: pointer;
}
img {
  margin: 1em;
  border-radius: 100%;
}
.is-active {
  box-shadow: 0 0 12px #ddd;
}
</style>
<script>
import MapStep from '../components/MapStep.vue'
export default {
  components: {
    MapStep,
  },
  props: ['choice'],
  created() {
    if (
      Object.keys(this.choice).length > 4 &&
      this.choice.constructor === Object
    ) {
      this.coordinates = Object.values(this.choice)[3][1]
    }
  },
  data() {
    return {
      activeTab: 0,
      input: '',
      coordinates: '',
    }
  },
  methods: {
    address(event) {
      this.coordinates = event.lat + ' ' + event.lng
    },
    goToStep: function(step) {
      this.$emit('choice', [this.input, this.coordinates.split(' ')])
      this.$emit('currentStepUp', step)
    },
  },
}
</script> 
