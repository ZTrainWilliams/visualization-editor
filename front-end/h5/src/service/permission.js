const pluginsType = ['h5', 'web']

// 全局存储组件使用
export const getPlugin = (plugins) => pluginsType.filter(p => plugins.includes(p) !== -1)
