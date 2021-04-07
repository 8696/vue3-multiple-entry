<template>
  <div class="home">
    <div :class="color">home</div>
    <input type="text" v-model="color">
  </div>
</template>

<script lang="ts">

import {Options, Vue} from 'vue-class-component';

@Options({
  components: {}
})
export default class Home extends Vue {
  color = ''
}
</script>
<style scoped lang="scss">
.red {
  color: red;
}

.green {
  color: green;
}
</style>
