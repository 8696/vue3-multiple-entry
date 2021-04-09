<template>
  <div>
    <span>Test.component</span>
    <br>
    <span>{{ userState.name }}</span>
  </div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component';
import userState from '../../../ref/user'

export default class TestComponent extends Vue {
  userState = userState
  beforeCreate() {
    console.log('beforeCreate')
  }

  mounted() {
    console.log('mounted')
  }
}
</script>
