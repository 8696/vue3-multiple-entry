<template>
  <div>
    <button @click="change">{{ show ? '隐藏' : '展示' }}</button>
    <div v-show="show">v-if</div>
    <hr>
    <button @click="changeComponent">{{ componentShow ? '隐藏' : '展示' }}</button>
    <test-component v-show="componentShow"/>
  </div>
</template>

<script lang="ts">

import {Vue, Options} from 'vue-class-component';
import TestComponent from '../component/test.component.vue'


@Options({
  components: {
    TestComponent
  }
})
export default class Home extends Vue {
  show = false
  componentShow = false

  change() {
    this.show = !this.show
  }

  changeComponent() {
    this.componentShow = !this.componentShow
  }
}
</script>
