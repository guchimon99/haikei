<template>
<div class="about">
  <Block>
    <Header />
  </Block>
  <Block>
    <section class="about__contents">
      <h1>拝啓ﾌﾟﾛﾌｨｰﾙ</h1>
      <p>拝啓ﾌﾟﾛﾌｨｰﾙは、2004年に篠田裕輔さんにより開発され「前略ﾌﾟﾛﾌｨｰﾙ」オマージュしたサービスです。</p>
      <h2>謝辞</h2>
      <p>当ｻｰﾋﾞｽで使用しているﾌｫﾝﾄ「PixelMplus」は <a href="https://twitter.com/itouhiro" target="_blank">itouhiro</a>が作成したフォントです。</p>
    </section>
  </Block>
  <Footer />
</div>
</template>

<script>
import Header from '../components/Header.vue'
import Block from '../components/Block.vue'
import Footer from '../components/Footer.vue'
export default {
  name: "About",
  components: {
    Header,
    Block,
    Footer,
  }
}
</script>

<style lang="scss">
.about {
  &__contents {
    padding: 1rem;
  }
}
</style>
