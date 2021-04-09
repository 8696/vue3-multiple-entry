<template>
  <div>
    <button @click="change">{{ show ? '隐藏' : '展示' }}</button>
    <div v-if="show">v-if</div>
    <hr>
    <button @click="changeComponent">{{ componentShow ? '隐藏' : '展示' }}</button>
    <test-component v-if="componentShow"/>
    <hr>
    <button @click="changeState">change state</button>
    <span>{{ userState.name }}</span>
    <img style="width: 20px" :src="img" alt="">
  </div>
</template>

<script lang="ts">

import {Vue, Options} from 'vue-class-component';
import TestComponent from '../component/test.component.vue'

import userState from '../../../ref/user'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../../assets/20210408173058.png')

@Options({
  components: {
    TestComponent
  }
})

class E extends Vue {
  userState = userState
  img: string = img
}

export default class IndexPage extends E {
  show = false
  componentShow = false

  change() {
    this.show = !this.show
  }

  changeComponent() {
    this.componentShow = !this.componentShow
  }

  changeState() {
    userState.name = Date().toString()
  }
}
</script>
