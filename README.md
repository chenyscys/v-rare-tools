# v-rare-tools

English | [简体中文](https://github.com/chenyscys/v-rare-tools/blob/master/README-zh.md)

## version：1.0.2

fixed the bug which innerHTML auto translate the Escape Sequence

## install
```
npm install v-rare-tools
```

### use
In Your Vue project，main.js like this
```
import { EmojiTextarea, EmojiWord } from 'v-rare-tools'
Vue.use(EmojiTextarea)
Vue.use(EmojiWord)
```

### plugin
EmojiTextarea is a div like textarea with qqface, emoji
```
template:
<Emoji-textarea v-bind="textParams" v-model="textVal"/>

js:
data() {
    textParams: {
        maxsize: 1000, // max words input
        textHeight: 200 // this textarea height
    },
    textVal: ''  //  the value of EmojiTextarea 
}
```

EmojiWord is a tag of p which can translate the qqface and emoji code to img
```
template:
<Emoji-word :word="textVal"/>

js:
data() {
    textVal: ''  //  the word want to translate the qqface and emoji to img
}
```
