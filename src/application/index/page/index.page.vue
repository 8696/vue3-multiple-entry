<template>
  <div class="index">
    <ul>
      <li>
        <a href="/html">原始HTML</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {}
})
export default class Home extends Vue {
}
</script>
