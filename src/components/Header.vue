<template>
  <header class="header">
    <router-link class="header__brand" to="/">
      <img src="/assets/img/banner.svg" alt="拝啓ﾌﾟﾛﾌｨｰﾙ" class="header__banner">
    </router-link>
    <router-link to="/terms" class="header__terms">［ 必ずお読みください ］</router-link>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss">
.header {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__brand {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
  &__banner {
    width: 16rem;
    max-width: calc(100vw - 1rem);
    height: auto;
    display: block;
    margin: 0 auto 1rem;
  }
  &__terms {
    background: red;
    color: white;
    display: inline-block;
    margin: 0 auto;
    padding: 0;
    font-size: 1.2rem;
    text-decoration: none;
  }
}
</style>
