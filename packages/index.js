// 导入单个组件
import EmojiTextarea from './EmojiTextarea/index';
import EmojiWord from './EmojiWord/index';

// 以数组的结构保存组件，便于遍历
const components = [
  EmojiTextarea, EmojiWord,
];
function install(Vue) {
  components.map((component) => Vue.component(component.name, component));
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  EmojiTextarea,
  EmojiWord,
};
