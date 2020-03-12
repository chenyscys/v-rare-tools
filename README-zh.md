# v-rare-tools

> 这是一个比较少见的vue工具库集合，目前包含了以下插件，基于vue-cli3.0开发的
> 1、qq，emoji表情的EmojiTextarea输入框插件
> 2、将表情代码转化为表情的EmojiWord插件

## 安装
```
npm install v-rare-tools
```

### 使用
在vue项目的main.js 引入v-rare-tools，如下：
```
import { EmojiTextarea, EmojiWord } from 'v-rare-tools'
Vue.use(EmojiTextarea)
Vue.use(EmojiWord)
```

### 插件列表
EmojiTextarea，这是一个带表情的输入框，可设置最高字数，不过表情不包含在字数统计当中
```
template:
<Emoji-textarea v-bind="textParams" v-model="textVal"/>

js:
data() {
    textParams: {
        maxsize: 1000, // 最大字数
        textHeight: 200 // 输入框高度
    },
    textVal: ''  //  双向绑定输入框的值
}
```

EmojiWord 这是一个转化表情的插件，将表情代码转化为图片的组件
```
template:
<Emoji-word :word="textVal"/>

js:
data() {
    textVal: ''  //  可把带有表情的字符串传进去，就会自动转化
}
```