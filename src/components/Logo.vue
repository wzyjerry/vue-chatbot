<template>
<a @click="goHome">
  <div class="logo">
    <span class="chat">Chat</span>
    <span class="bot">Bot</span>
  </div>
</a>
</template>

<script>
export default {
  name: "Logo",
  methods: {
    goHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style lang="stylus">
.logo
  margin 10px 20px
  cursor pointer
  font-size 30px
  .chat
    color #000
  .bot
    color #1896e5
</style>
