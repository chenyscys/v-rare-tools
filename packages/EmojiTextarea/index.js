import EmojiTextarea from './src/EmojiTextarea.vue';

// eslint-disable-next-line func-names
EmojiTextarea.install = function (Vue) {
  Vue.component(EmojiTextarea.name, EmojiTextarea);
};

export default EmojiTextarea;
