/* eslint-disable */
// 组件属性面板注册
const files = require.context(
  '../../../../plugins/components/basic',
  true,
  /.vue$/,
);

const webComMap = {
  RCCard: {
    i18nTitle: {
      'en-US': 'test',
      'zh-CN': '测试',
    },
    title: '测试',
    icon: 'line-chart',
    visible: true,
  },
};

const modules = {};
files.keys().forEach(item => {
  console.log(files(item), '1');
  modules[files(item).default.name] = files(item).default;
});

// 所有组件列表
const componentsList = [];
for (const key in modules) {
  componentsList.push(modules[key]);
}

// 定义 install 方法，注册所有组件
const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;
  componentsList.map(c => Vue.component(c.name, c));
};

const webPluginList = [];
componentsList.map(c => {
  if (webComMap[c.name]) {
    webComMap[c.name] = {
      ...webComMap[c.name],
      name: c.name,
      component: c,
    };
    webPluginList.push(webComMap[c.name]);
  } else {
    console.error(`+++++++++++${c.name} can not fount +++++++++++`);
  }
});

export { webPluginList };
export default {
  install,
};
