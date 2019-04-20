<template>
<div class="terms">
  <Block>
    <Header />
  </Block>
  <Block>
    <section class="terms__contents">
      <h1>利用規約</h1>
      <p>このサービスを使って発生した問題に関して一切の責任を負いません。</p>
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
  name: "Terms",
  components: {
    Header,
    Block,
    Footer,
  }
}
</script>

<style lang="scss">
.terms {
  &__contents {
    padding: 1rem;
  }
}
</style>
