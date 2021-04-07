<template>
  <div class="">
    <button @click="sum++">+1</button>
    <div>{{ sum }}</div>
  </div>
</template>

<script lang="ts">

import {Options, Vue} from 'vue-class-component';

@Options({
  components: {},
  watch: {
    sum(newValue: number, oldValue: number): void {
      console.log(newValue, oldValue)
    }
  }
})
export default class Home extends Vue {
  sum = 0
}
</script>
