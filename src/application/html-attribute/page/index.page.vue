<template>
  <div class="">
    <div :attr="attr" :class="attr">attr</div>
  </div>
</template>

<script lang="ts">

import {Options, Vue} from 'vue-class-component';

@Options({
  components: {}
})
export default class Home extends Vue {
  attr = ''

  created() {
    this.attr = 'test-attr'
  }
}
</script>
