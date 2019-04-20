<template>
  <div class="block">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Block'
}
</script>

<style lang="scss">
.block {
  border-bottom: solid 0.1rem #000;
}
</style>
