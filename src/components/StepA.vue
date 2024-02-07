<template>
  <div>
    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
      {{ $t('addSteps.step1.text1') }}
    </h1>
    <div class="flex justify-center mx-auto flex px-1 py-8">
      <div
        class="choiceDiv"
        :class="{ 'is-active': activeTab1 }"
        @click="activeTab1 = !activeTab1"
        @click.prevent="select()"
      >
        <img class="p-4 w-24 h-24" src="../assets/steps/walk.svg" alt="" />
      </div>
      <div
        class="choiceDiv"
        :class="{ 'is-active': activeTab2 }"
        @click="activeTab2 = !activeTab2"
        @click.prevent="select()"
      >
        <img class="p-4 h-24 w-24" src="../assets/steps/car.svg" alt="" />
      </div>
    </div>
    <div class="flex justify-center mx-auto flex px-5 py-8">
      <img
        class="disabled steparr w-16"
        src="../assets/previous.svg"
        alt="previous"
      />
      <a
        @click.prevent="goToStep(2)"
        :class="{ 'not-valid': !valid }"
        ref="next"
        href="/"
        ><img class="steparr w-16" src="../assets/next.svg" alt="next"
      /></a>
    </div>
    <p class="mb-8 leading-relaxed">
      {{ $t('addSteps.step1.text2') }}
    </p>
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
.not-valid {
  transition: 0.3s;
  filter: drop-shadow(0em 0.1em 1em rgb(220, 20, 20));
}
.not-valid img {
  filter: drop-shadow(0em 0.1em 0em rgb(220, 20, 20));
  filter: opacity(60%);
  transition: 0.3s;
}
.disabled {
  filter: brightness(20%);
}
.disabled:hover {
  cursor: default;
}
img:hover {
  cursor: pointer;
}
.choiceDiv {
  border: 0.1em solid #f7f7f7;
  border-radius: 100%;
  margin: 1em;
  background: rgb(199, 233, 228);
  background: radial-gradient(
    circle,
    rgba(199, 233, 228, 1) 5%,
    rgba(54, 110, 113, 1) 67%
  );
  transition: 0.3s;
  filter: brightness(60%);
}
.is-active {
  transition: 0.3s;
  transition-property: all;
  box-shadow: 0 0 100px #ddd;
  filter: saturate(50%);
}
</style>
<script>
export default {
  props: ['choice'],
  created() {
    if (
      Object.keys(this.choice).length >= 0 &&
      this.choice.constructor === Object
    ) {
      this.activeTab1 = Object.values(this.choice)[0][0]
      this.activeTab2 = Object.values(this.choice)[0][1]
    }
  },
  data() {
    return {
      valid: true,
      activeTab1: false,
      activeTab2: false,
    }
  },
  methods: {
    goToStep: function(step) {
      if (!this.activeTab1 && !this.activeTab2) {
        this.valid = false
      } else {
        this.$emit('currentStepUp', step)
      }
    },
    select: function() {
      if (!this.activeTab1 && !this.activeTab2) {
        this.valid = false
      } else {
        this.valid = true
        if (this.activeTab1 == undefined) {
          this.$emit('choice', [false, this.activeTab2])
        } else if (this.activeTab2 == undefined) {
          this.$emit('choice', [this.activeTab1, false])
        } else {
          this.$emit('choice', [this.activeTab1, this.activeTab2])
        }
      }
    },
  },
}
</script>
