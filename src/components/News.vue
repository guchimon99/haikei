<template>
<section class="news">
  <h2 class="news__title">⭐お知らせ (2019/04/20)</h2>
  <div class="news__contents">
    <p style="text-align:center; color: red; font-size: 1.4rem;">FAQをご確認ください</p>
    <p>拝啓ﾌﾟﾛﾌｨｰﾙに関して特にお問い合わせの多い「よくある質問と回答」を書きﾍﾟｰｼﾞに掲載しました。</p>
    <ul>
      <li><a href="/faq">特にお問い合わせの多い質問</a></li>
    </ul>
    <p>運営へお問い合わせの前に、上記ページを確認ください。</p>
  </div>
</section>
</template>

<script>
export default {
  name: 'News'
}
</script>

<style lang="scss">
.news {
  &__title {
    font-size: 1rem;
    font-weight: normal;
  }
  ul {
    margin: 1rem auto;
  }
}
</style>
