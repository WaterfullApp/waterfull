<template>
    <section class="text-gray-500 bg-gray-900 body-font">
      <div
        class="container mx-auto flex justify-center flex-col items-center"
        :class="currentStep != 4 ? 'px-5 py-24' : ''"
      >
        <div
          class="justify-center lg:flex-grow md:w-1/2 flex flex-col mb-16 md:mb-0 items-center text-center"
        >
          <step1
            v-bind:choice="choice"
            v-on:choice="choice[1] = $event"
            v-on:currentStepUp="currentStep = $event"
            v-if="currentStep == 1"
          />
          <step2
            v-bind:choice="choice"
            v-on:choice="choice[2] = $event"
            v-on:currentStepUp="currentStep = $event"
            v-if="currentStep == 2"
          />
          <step3
            v-bind:choice="choice"
            v-on:choice="choice[3] = $event"
            v-on:currentStepUp="currentStep = $event"
            v-if="currentStep == 3"
          />
          <step4
            v-bind:choice="choice"
            v-on:choice="choice[4] = $event"
            v-on:currentStepUp="currentStep = $event"
            v-if="currentStep == 4"
          />
          <step5
            v-bind:choice="choice"
            v-on:choice="choice[5] = $event"
            v-on:currentStepUp="currentStep = $event"
            v-if="currentStep == 5"
          />
          <step6
            v-bind:choice="choice"
            v-on:choice="choice[6] = $event"
            v-on:currentStepUp="currentStep = $event"
            v-if="currentStep == 6"
          />
          <step7
            v-on:currentStepUp="currentStep = $event"
            v-if="currentStep == 7"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import Step1 from '../components/Step1.vue'
  import Step2 from '../components/Step2.vue'
  import Step3 from '../components/Step3.vue'
  import Step4 from '../components/Step4.vue'
  import Step5 from '../components/Step5.vue'
  import Step6 from '../components/Step6.vue'
  import Step7 from '../components/Step7.vue'
  
  export default {
    updated() {
      if (this.currentStep === 7) {
        this.update()
      }
    },
    components: {
      Step1,
      Step2,
      Step3,
      Step4,
      Step5,
      Step6,
      Step7,
    },
    created() {
      window.addEventListener('resize', this.resizeEvent)
      this.choice.id = Math.floor(Math.random() * 100)
    },
    destroyed() {
      window.removeEventListener('resize', this.resizeEvent)
    },
    metaInfo: {
      title: 'Add',
    },
    methods: {
      update() {
        fetch('https://still-reaches-12723.herokuapp.com/https://waterfull.netlify.app/api/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: this.choice,
          }),
        })
      },
      resizeEvent() {
        this.styleObject = {
          height: window.innerHeight - 100 + 'px',
          width: window.innerWidth - 100 + 'px',
        }
      },
    },
    data() {
      return {
        previousData: new Object(),
        toDb: new Object(),
        choice: new Object(),
        currentStep: 1,
        styleObject: {
          height: window.innerHeight - 100 + 'px',
          width: window.innerWidth - 100 + 'px',
        },
      }
    },
  }
  </script>
  