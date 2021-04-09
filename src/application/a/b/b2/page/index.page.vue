<template>
  <div>
    <router-link to="/home">home</router-link>
    a/b/b2 - index
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

const utils = () => import(/* webpackChunkName: "utils-utils-utils-utils-utils" */ '@/utils/utils')
@Options({
  name: 'index',
  components: {}
})
export default class Home extends Vue {
  mounted() {
    console.log('index mounted')
    setTimeout(() => {
      utils()
        .then(({parse}) => {
          console.log(parse('1'))
        })
    }, 3000)
    setTimeout(() => {
      utils()
        .then(({parse2}) => {
          console.log(parse2('2'))
        })
    }, 4000)
    setTimeout(() => {
      utils()
        .then(({parse3}) => {
          console.log(parse3('3'))
        })
    }, 5000)
  }

  activated() {
    console.log('index activated')
  }
}
</script>
<style scoped>

</style>
