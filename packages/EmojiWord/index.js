import EmojiWord from './src/EmojiWord.vue';

// eslint-disable-next-line func-names
EmojiWord.install = function (Vue) {
  Vue.component(EmojiWord.name, EmojiWord);
};

export default EmojiWord;
