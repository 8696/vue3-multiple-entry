<template>
  <div class="index">
    <ul>
      <li>
        <a href="/html">原始HTML</a>
      </li>
      <li>
        <a href="/html-attribute">元素属性</a>
      </li>
      <li>
        <a href="/v-if">条件渲染 v-if</a>
      </li>
      <li>
        <a href="/v-show">条件渲染 v-show</a>
      </li>
      <li>
        <a href="/v-for">条件渲染 v-for</a>
      </li>
      <li>
        <a href="/computed">计算属性</a>
      </li>
      <li>
        <a href="/watch">侦听器</a>
      </li>
      <li>
        <a href="/class">class</a>
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
}
</script>
