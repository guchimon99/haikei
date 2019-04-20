<template>
<div class="sign-up">
  <Block>
    <Header />
  </Block>
  <Block>
    <div class="sign-up__form">
      <p>
        <label for="">📧 ﾒｰﾙｱﾄﾞﾚｽ</label>
        <input type="email" />
      </p>
      <p>
        <label for="">🔒 ﾊﾟｽﾜｰﾄﾞ</label>
        <input type="password" />
      </p>
      <p>
        <label for="">🔒 ﾊﾟｽﾜｰﾄﾞ確認</label>
        <input type="password" />
      </p>
    </div>
  </Block>
  <Footer />
</div>
</template>

<script>
import Header from '../components/Header.vue'
import Block from '../components/Block.vue'
import Footer from '../components/Footer.vue'
export default {
  name: "SignUp",
  components: {
    Header,
    Block,
    Footer,
  }
}
</script>

<style lang="scss">

</style>
