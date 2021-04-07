<template>
  <div class="">
    <button @click="sum++">+1</button>
    <div>{{ sum2 }}</div>
  </div>
</template>

<script lang="ts">

import {Options, Vue} from 'vue-class-component';

@Options({
  components: {},
  computed: {
    sum2() {
      return this.sum + 1
    }
  }
})
export default class Home extends Vue {
  sum = 0
}
</script>
