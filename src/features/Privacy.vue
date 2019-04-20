<template>
<div class="privacy">
  <Block>
    <Header />
  </Block>
  <Block>
    <section class="privacy__content">
      <h1>プライバシーポリシー</h1>
      <p>データの扱いには細心の注意を払いますが、万が一問題が発生した場合は一切の責任を負いません。</p>
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
  name: "Privacy",
  components: {
    Header,
    Block,
    Footer,
  }
}
</script>

<style lang="scss">
.privacy {
  &__content {
    padding: 1rem;
  }
}
</style>
