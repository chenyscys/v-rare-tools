<template>
    <div class="emojiTextBox">
      <div ref="initBox"
        id="f47e6662-7978-40d8-b1a1-f9e0bdc9b04f"
        @input="initText"
        @focus="addListenFocusout"
        contenteditable="true"
        class="qq_face emoji_face initBox" :style="{ height: textHeight + 'px'}">
      </div>
      <div id="cacheText" v-show="false"></div>
      <div class="text-foot">
        <span class="faceBtn" @click="showExpression"></span>
        <p>还可输入{{txtSize}}字,按Enter键换行</p>
      </div>
      <div class="expression" v-show="isShowExpression" :style="{ height: textHeight + 20 + 'px'}">
        <div class="qq_face">
          <span v-for="(item,index) in qqFaceList"
            @click="initQQFace(item)"
            :key="'qq'+index" :title="item.label" :class="'faceEmoji qqface'+item.value">
            {{item.label}}
          </span>
        </div>
        <div class="emoji_face">
          <span v-for="(item,index) in emojiList"
            @click="initEmoji(item)"
            :key="'qq'+index" :title="item.label" :class="'faceEmoji emoji'+item.value">
            {{item.label}}
          </span>
        </div>
        <div class="emoji_weixin" v-if="canUseEmojiWeixin">
          <span v-for="(item,index) in emojiWeixinList"
            @click="initEmojiWx(item)" class="faceEmoji"
            :key="'qq'+index" :title="item.label">
            {{item.value}}
          </span>
        </div>
      </div>
    </div>
</template>

<script>
import {
  qqFaceMap, emojiFace, emojiWeixinObj, getFaceSendValue, emojiQQlist, replaceImg,
} from '../../assets/js/faceMap';

import faceimg from '../../assets/img/spacer.gif';

export default {
  name: 'EmojiTextarea',
  props: {
    maxsize: {
      type: Number,
      default: 300,
    },
    textHeight: {
      type: Number,
      default: 180,
    },
    initData: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      txtSize: 0,
      isShowExpression: false,
    };
  },
  computed: {
    canUseEmojiWeixin() {
      const version = navigator.userAgent;
      if (version.indexOf('Windows NT 5') !== -1 || version.indexOf('Windows NT 7') !== -1) {
        return false;
      }
      return true;
    },
    qqFaceList() {
      return qqFaceMap;
    },
    emojiList() {
      return emojiFace;
    },
    emojiWeixinList() {
      return emojiWeixinObj;
    },
  },
  mounted() {
    this.$refs.initBox.innerHTML = replaceImg(this.initData, faceimg);
    this.txtSize = this.maxsize;
    document.body.addEventListener('click', this.hideExpression, true);
  },
  beforeDestroy() {
    document.body.removeEventListener('click', this.hideExpression);
    document.getElementById('f47e6662-7978-40d8-b1a1-f9e0bdc9b04f').removeEventListener('focusout', this.blurFocus);
  },
  methods: {
    addListenFocusout() {
      document.getElementById('f47e6662-7978-40d8-b1a1-f9e0bdc9b04f').addEventListener('focusout', this.blurFocus);
    },
    blurFocus() {
      document.getElementById('f47e6662-7978-40d8-b1a1-f9e0bdc9b04f').removeEventListener('focusout', this.blurFocus);
      this.$refs.initBox.focus();
    },
    hideExpression(e) {
      if (e.target.id !== 'f47e6662-7978-40d8-b1a1-f9e0bdc9b04f' && e.target.className !== 'faceBtn' && e.target.className.indexOf('faceEmoji') === -1) {
        this.isShowExpression = false;
        document.getElementById('f47e6662-7978-40d8-b1a1-f9e0bdc9b04f').removeEventListener('focusout', this.blurFocus);
        document.getElementById('f47e6662-7978-40d8-b1a1-f9e0bdc9b04f').blur();
      }
    },
    showExpression() {
      this.isShowExpression = !this.isShowExpression;
    },
    initQQFace(item) {
      const faceid = getFaceSendValue(item.value);
      const str = `<img class="facebox qqface${item.value}" data-name="${faceid}" src="${faceimg}">`;
      this.insertHtmlAtCaret(str);
      this.isShowExpression = false;
      this.updateText();
    },
    initEmoji(item) {
      let code = '';
      let str = '';
      if (emojiQQlist[item.label]) {
        code = emojiQQlist[item.label];
        const faceid = getFaceSendValue(code);
        str = `<img class="emojibox emoji${item.value}" data-name="${faceid}" src="${faceimg}">`;
      } else {
        code = item.code;
        const faceid = getFaceSendValue(code);
        str = `<img class="emojibox emoji${item.value}" data-name="${faceid}" src="${faceimg}">`;
      }
      this.insertHtmlAtCaret(str);
      this.isShowExpression = false;
      this.updateText();
    },
    initEmojiWx(item) {
      this.insertHtmlAtCaret(item.value);
      this.isShowExpression = false;
      this.updateText();
    },
    initText() {
      if (this.maxsize - this.$refs.initBox.innerText.length <= 0) {
        this.$refs.initBox.innerText = this.$refs.initBox.innerText.substring(0, this.maxsize);
        this.txtSize = 0;
      } else {
        this.txtSize = this.maxsize - this.$refs.initBox.innerText.length;
      }
      this.updateText();
    },
    insertHtmlAtCaret(html) {
      let sel; let range;
      this.$refs.initBox.focus();
      if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
          range = sel.getRangeAt(0);
          range.deleteContents();
          const el = document.createElement('div');
          el.innerHTML = html;
          const frag = document.createDocumentFragment();
          const lastNode = frag.appendChild(el.firstChild);

          range.insertNode(frag);

          // Preserve the selection
          if (lastNode) {
            range = range.cloneRange();
            range.setStartAfter(lastNode);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
          }
        }
      } else if (document.selection && document.selection.type !== 'Control') {
        // IE < 9
        document.selection.createRange().pasteHTML(html);
      }
    },
    updateText() {
      const newText = this.$refs.initBox.innerHTML.replace(/<img(.*?)>/gi, (str) => {
        const html = str.match(/<img .*? data-name=["](.*?)["] .*?>/); // 写个正则匹配data-name
        if (html && html.length > 1) {
          return html[1];
        }
        return '';
      });
      const cacheText = document.getElementById('cacheText');
      cacheText.innerHTML = newText;
      this.$emit('input', cacheText.innerText);
    },
  },
};
</script>

<style lang="less" scoped>
@import '../../assets/css/expression.css';

.emojiTextBox{
  position: relative;
  border:1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  background: #fff;
  .expression{
    max-width: 465px;
    position: absolute;
    top: 0;
    left: 10px;
    z-index: 1;
    background: #fff;
    overflow: auto;
  }
  .initBox{
    padding: 10px;
    text-align: left;
    width: auto;
    line-height: 20px;
  }
  .text-foot{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-top:1px solid #ddd;
    p{
      padding: 0;
      margin: 0;
      color: #727171;
    }
    .faceBtn{
      display: block;
      width: 20px;
      height: 20px;
      background: url(../../assets/img/icon-reply.png) -162px 0 no-repeat;
      cursor: pointer;
    }
  }
}
</style>
