<template>
  <div id="app">
    <Emoji-textarea v-bind="textParams" v-model="textVal"/>
    <Emoji-word :word="textVal" />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      textParams: {
        maxsize: 1000,
        textHeight: 200,
      },
      textVal: 'adas[玫瑰]',
    };
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
