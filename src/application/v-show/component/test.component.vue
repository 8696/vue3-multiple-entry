<template>
  <div>
    <span>Test.component</span>
  </div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component';

export default class TestComponent extends Vue {
  beforeCreate() {
    console.log('beforeCreate')
  }

  mounted() {
    console.log('mounted')
  }
}
</script>
