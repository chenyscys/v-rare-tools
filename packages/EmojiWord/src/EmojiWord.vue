<template>
    <p class="qq_face emoji_face" v-html="translateWord"></p>
</template>

<script>
import {
  replaceImg,
} from '../../assets/js/faceMap';

import faceimg from '../../assets/img/spacer.gif';

export default {
  name: 'EmojiWord',
  props: {
    word: {
      type: String,
      default: '',
    },
  },
  computed: {
    translateWord() {
      return replaceImg(this.word, faceimg);
    },
  },
};
</script>
