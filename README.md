<h2 align="center">
 可视化搭建平台
</h2>
<p align="center">
可视化搭建，拖拽生成数据大屏页面
</p>
<p align="center">
Data Screen Page Builder&Generator with Drag&Drop
</p>

### 生态

基于 [鲁班 H5](https://ly525.github.io/luban-h5) 二次开发。

| 后端集成                                                                                       | 官方组件库                                                    | 支撑/辅助组件                                          | 自定义组件                                                                 | RoadMap                                                        |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [Strapi.js (官方后端 API)](/luban-h5/tree/dev/back-end/h5-api)                                 | [轮播图](https://github.com/luban-h5-components/lbp-slide)    | 图片库                                                 | [自定义组件开发脚手架](https://github.com/luban-h5/vue-cli-plugin-lbhc)    | [RoadMap/开发计划](https://github.com/ly525/luban-h5/projects) |
| [SpringBoot2-JPA](https://github.com/luban-h5/spring-boot-api-for-editor)                      | [普通按钮](https://github.com/luban-h5-components/lbc-button) | [文本对齐](https://github.com/luban-h5/lbs-text-align) | [自定义组件开发教程](https://github.com/luban-h5/vue-cli-plugin-lbhc/wiki) |                                                                |
| [SpringBoot2-Mybatis-plus](https://github.com/luban-h5/springboot2-mybatis-plus-api-for-luban) |                                                               |                                                        | 视频教程(WIP)                                                              |                                                                |

## 快速体验

> 以下方式，任选其中一种即可

#### 一、一键脚本（推荐！）

```bash
git clone https://github.com/ly525/luban-h5 && cd luban-h5
# 安装依赖，构建前后端（安装依赖会耗时略长，请耐心等待）
./luban-h5.sh init

# 启动项目访问 http://localhost:1337 即可
./luban-h5.sh start

# ./luban-h5.sh stop
```

#### 二、本地安装了 Node、Yarn

```bash
git clone https://github.com/ly525/luban-h5
cd luban-h5 # 项目根目录

# 后端
cd back-end/h5-api && yarn && yarn dev

# 前端
# 新开一个终端，在项目根目录执行如下命令
cd front-end/h5 && yarn && yarn build:engine && yarn dev

# 启动项目访问 http://localhost:1337 即可
```

- 更多细节，请参照 [鲁班 H5-在线文档](https://ly525.github.io/luban-h5/zh/) 的 [`快速开始`](https://ly525.github.io/luban-h5/zh/getting-started/quick-start.html) 章节，进行配置即可

- 如果遇到接口 403 问题，请参照 [`快速开始`](https://ly525.github.io/luban-h5/zh/getting-started/quick-start.html) 章节，搜索关键字：403 即可

### Features

1. 编辑器

   - [x] 参考线
   - [x] 吸附线、组件对齐
   - [x] 拖拽改变组件形状
   - [x] 元素: 复制（画布）
   - [x] 元素: 删除（画布）
   - [x] 元素: 编辑（画布）
   - [x] 页面：新增
   - [x] 页面：复制
   - [x] 页面：删除
   - [x] 快速预览
   - [x] 撤销、重做

2. 组件系统

   - [x] 文字
   - [x] 普通按钮
   - [x] 表单按钮
   - [x] 表单输入框
   - [x] 普通图片
   - [x] 背景图
   - [x] 背景音乐
   - [x] 视频（Iframe 形式）

3. 增强功能

   - [ ] 上传 PSD，一键转换为 H5(已经调研，可以实现)
   - [x] 图片库
   - [x] 第三方无版权图片搜索
   - [ ] 自定义脚本(已经调研，可以实现)

4. 后端 API
   - [x] 创建、保存、更新作品
   - [x] 表单数据收集
   - [x] 表单数据展示
   - [x] 在线预览
   - [x] 二维码预览

#### 技术栈（当前）

1. 前端：[Vue.js](https://vuejs.org/v2/guide/)
2. 后端：[Strapi](https://strapi.io/)
3. 存储：[Sqlite](https://www.sqlite.org/)
