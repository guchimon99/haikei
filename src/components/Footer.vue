<template>
<footer class="footer">
  <ul>
    <li><router-link to="/about">拝啓プロフィールについて</router-link></li>
    <li><router-link to="/terms">利用規約</router-link></li>
    <li><router-link to="/privacy">プライバシーポリシー</router-link></li>
    <li><a target="_blank" href="//twitter.com/guchimon99">お問い合わせ</a></li>
  </ul>
</footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
.footer {
  padding: 1rem;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    margin: 0 auto 0.5rem;
  }
}
</style>
