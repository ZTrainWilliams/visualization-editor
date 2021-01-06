import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// !#zh 请注意，务必使用 font-awesome@4.7.0 版本
import 'font-awesome/css/font-awesome.min.css';
import h5PluginInstall from './h5';
import webPluginInstall from './web';

Vue.use(Antd);
const usablePlugin = ['h5', 'web']

usablePlugin.includes('h5') && Vue.use(h5PluginInstall)
usablePlugin.includes('web') && Vue.use(webPluginInstall)
