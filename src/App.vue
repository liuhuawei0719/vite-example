<template>
 <div v-if="__IS_MOBILE__">v-if</div>
 <div :class="__IS_MOBILE__ ? 'red' : 'blue'">条件判断</div>
 <div>{{demo}}</div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
let demo = computed(() => {
  return __IS_MOBILE__ ? '在script中使用移动端' : '在script中使用电脑端'
})
</script>

<style>
.red {
  color: red
}
.blue {
  color: blue
}
</style>
