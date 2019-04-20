<template>
<div class="home">
  <Block>
    <Header />
  </Block>
  <Block>
    <section class="home__me">
      <router-link to="/signin">ﾌﾟﾛﾌｨｰﾙ編集室</router-link>
      <span>(管理人室)</span>
    </section>
  </Block>
  <Block>
    <section class="home__menu">
      <ul>
        <li><router-link to="/signup">1.ﾌﾟﾛﾌｨｰﾙ新規登録!</router-link></li>
        <li><router-link to="/search/id">2.人を探す(ﾌﾟﾛﾌIDで)</router-link></li>
        <li><router-link to="/search/keyword">2.人を探す(ﾌﾘｰﾜｰﾄﾞで)</router-link></li>
        <li><router-link to="/faq">4.よくあるご質問</router-link></li>
      </ul>
      <strong>「拝啓ﾌﾟﾛﾌｨｰﾙ」のご利用は無料です。</strong>
    </section>
  </Block>
  <Block>
    <section class="home__news home__section">
      <News />
    </section>
  </Block>
  <Footer />
</div>
</template>

<script>

import Header from '../components/Header.vue'
import Block from '../components/Block.vue'
import Footer from '../components/Footer.vue'
import News from '../components/News.vue'

export default {
  name: "Home",
  components: {
    Header,
    Block,
    Footer,
    News,
  }
}
</script>

<style lang="scss">
.home {
  max-width: 40rem;
  margin: 0 auto;
  &__me {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.75rem 1rem;
    line-height: 1.8;
  }
  &__menu {
    padding: 1rem;
    ul {
      padding-left: 1rem;
      margin: 0 auto 1rem;
    }
    li {
      margin-bottom: 0.2rem;
    }
    a {
      display: block;
      font-size: 1.2rem;
    }
    strong {
      color: red;
      font-weight: normal;
      font-size: 1.2rem;
      line-height: 1;
    }
  }
  &__news {
    padding: 0 1rem;
  }
}
</style>
