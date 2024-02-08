<template>
  <div>
    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
      {{ $t('addSteps.step5.text1') }}
    </h1>
    <div class="flex justify-center mx-auto flex-col px-1 py-8">
      <input
      type="file"
      @change="handleImages($event)"
      accept="image/*"
      />
      <img class='max-w-32' :src="display"/>
    </div>
    <div :class="hiddenTrig" class="flex justify-center mx-auto flex px-5 py-8">
      <a @click.prevent="goToStep(4)" ref="previous" href="/"
        ><img class="steparr w-16" src="../assets/previous.svg" alt="previous"
      /></a>
      <a @click.prevent="goToStep(6)" ref="next" href="/"
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
  border-radius: 2%;
  box-shadow: 10px 0 30px #000;
}
.is-active {
  box-shadow: 0 0 12px #ddd;
}
.hidden {
  visibility: hidden;
}
</style>
<script>
export default {
  data() {
    return {
      choice: '',
      activeTab: 0,
      images: '',
      display: '',
      hiddenTrig: '',
    }
  },
  methods: {
    async goToStep(step) {
      await this.imgur()
      this.$emit('choice', Object.values(Object.values(this.choice)[0])[27])
      this.$emit('currentStepUp', step)
    },
    handleImages(files) {
      this.images = files.target.files[0]
      const reader = new FileReader
      reader.onload = e => {
        this.display = e.target.result
      }
      reader.readAsDataURL(files.target.files[0])
    },
    async imgur() {
      this.hiddenTrig = 'hidden'
      await fetch(`https://api.imgur.com/3/image.json`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: 'Client-ID 6d0ebcefb081eb1',
        },
        body: this.images,
      })
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.choice = data
        })
    },
  },
}
</script> 
