<template>
  <div>
    <router-link to="/">index</router-link>
    a/b/b2 - home
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  components: {}
})
export default class Home extends Vue {
  mounted() {
    console.log('home mounted')
  }
}
</script>
<style scoped>

</style>
