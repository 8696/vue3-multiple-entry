<template>
  <div class="">
    <div>{{ html }}</div>
    <div v-html="html" />
  </div>
</template>

<script lang="ts">

import {Options, Vue} from 'vue-class-component';

@Options({
  components: {}
})
export default class Home extends Vue {
  html = ''

  created() {
    this.html = '<h4 style="color: #9de8e8">H4</h4>'
  }
}
</script>
