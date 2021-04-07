<template>
  <div class="home">
    <button @click="push2array">push</button>
    <ul>
      <li v-for="(item, index) in list" v-bind:key="index">
        {{ index }} - {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">

import {Options, Vue} from 'vue-class-component';

@Options({
  components: {}
})
export default class Home extends Vue {
  list: Array<object> = []

  created() {
    this.list.push({
      name: new Date().toString()
    })
  }

  push2array() {
    this.list.push({
      name: new Date().toString()
    })
  }
}
</script>
