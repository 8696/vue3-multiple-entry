<template>
  <div>
    <router-view v-slot="{ Component }">
      <keep-alive include="index">
        <component :is="Component"/>
      </keep-alive>
    </router-view>
  </div>
</template>

<style lang="scss">
</style>
