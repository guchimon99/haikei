<template>
<div class="sign-in">
  <Block>
    <Header />
  </Block>
  <Block>
    sign in
  </Block>
  <Footer />
</div>
</template>

<script>
import Header from '../components/Header.vue'
import Block from '../components/Block.vue'
import Footer from '../components/Footer.vue'
export default {
  name: "SignIn",
  components: {
    Header,
    Block,
    Footer,
  }
}
</script>

<style lang="scss">

</style>
