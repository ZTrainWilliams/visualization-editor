import ShortcutButton from './shortcut-button';
import UsageTip from './usage-tip';
import LoadNpmPlugins from './load-npm-plugins.vue';
import langMixin from 'core/mixins/i18n';
import dragMixin from 'core/mixins/drag';
import { mapActions } from 'vuex';
import { h5PluginList } from '@/plugins/h5';
import { webPluginList } from '@/plugins/web';

export default {
  mixins: [langMixin, dragMixin],
  data: () => ({
    npmPackages: [],
    usablePlugin: ['h5', 'web'],
  }),
  methods: {
    ...mapActions('editor', [
      'elementManager',
      'pageManager',
      'saveWork',
      'setEditingPage',
    ]),
    ...mapActions('loading', {
      updateLoading: 'update',
    }),
    /**
     * !#zh 点击插件，copy 其基础数据到组件树（中间画布）
     * #!en click the plugin shortcut, create new Element with the plugin's meta data
     * pluginInfo {Object}: 插件列表中的基础数据, {name}=pluginInfo
     *
     * shortcutItem: PluginListItem = {
      name: String,
      shortcutProps: {}
     }
     */
    clone(shortcutItem) {
      this.elementManager({
        type: 'add',
        value: shortcutItem,
      });
    },
    /**
     * #!zh 渲染多个插件的快捷方式
     * #!en render shortcuts for multi plugins
     * @param {Object} group: {children, title, icon}
     */
    // renderMultiShortcuts (group) {
    //   const plugins = group.children
    //   return <a-popover
    //     placement="bottom"
    //     class="shortcust-button"
    //     trigger="hover">
    //     <a-row slot="content" gutter={20} style={{ width: '400px' }}>
    //       {
    //         plugins.sort().map(item => (
    //           <a-col span={6}>
    //             <ShortcutButton
    //               clickFn={this.onClickShortcut.bind(this, item)}
    //               title={item.title}
    //               faIcon={item.icon}
    //             />
    //           </a-col>
    //         ))
    //       }
    //     </a-row>
    //     <ShortcutButton
    //       title={group.title}
    //       faIcon={group.icon}
    //     />
    //   </a-popover>
    // },
    /**
     * #!zh: 渲染单个插件的快捷方式
     * #!en: render shortcut for single plugin
     * @param {Object} group: {children, title, icon}
     */
    // renderSingleShortcut ({ children }) {
    //   const [plugin] = children
    //   return <ShortcutButton
    //     clickFn={this.onClickShortcut.bind(this, plugin)}
    //     title={plugin.title}
    //     faIcon={plugin.icon}
    //   />
    // },
    /**
     * #!zh: 在左侧或顶部导航上显示可用的组件快捷方式，用户点击/拖拽之后，即可将其添加到中间画布上
     * #!en: render shortcust at the sidebar or the header. if user click/drag the shortcut, the related plugin will be added to the canvas
     * @param {Object} group: {children, title, icon}
     */
    // renderShortCutsPanel (groups) {
    //   return (
    //     <a-row gutter={20}>
    //       {
    //         groups.sort().map(group => (
    //           <a-col span={12} style={{ marginTop: '10px' }}>
    //             {
    //               group.children.length === 1
    //                 ? this.renderSingleShortcut(group)
    //                 : this.renderMultiShortcuts(group)
    //             }
    //           </a-col>
    //         ))
    //       }
    //     </a-row>
    //   )
    // }
  },
  /**
   * #!zh: 在左侧或顶部导航上显示可用的组件快捷方式，用户点击/拖拽之后，即可将其添加到中间画布上
   * #!en: render shortcust at the sidebar or the header.
   * if user click/drag the shortcut, the related plugin will be added to the canvas
   */
  render(h) {
    console.log(this.usablePlugin, 999);
    // return this.renderShortCutsPanel(this.groups)
    return (
      <div style='max-height: calc(100vh - 140px);overflow: scroll;'>
        <a-row gutter={20}>
          <UsageTip />
          <p style='text-align: center; background: lightblue; margin-bottom: 5px;'>
            H5组件
          </p>
          {this.usablePlugin.includes('h5') &&
            []
              .concat(h5PluginList)
              .filter(plugin => plugin.visible)
              .map(plugin => (
                <a-col span={12} style={{ marginTop: '10px' }}>
                  <ShortcutButton
                    clickFn={this.clone.bind(this, plugin)}
                    mousedownFn={this.handleDragStartFromMixin.bind(
                      this,
                      plugin,
                    )}
                    // title={plugin.title}
                    title={plugin.i18nTitle[this.currentLang] || plugin.title}
                    faIcon={plugin.icon}
                    disabled={plugin.disabled}
                  />
                </a-col>
              ))}
          <LoadNpmPlugins
            onLoadComplete={npmPackages => {
              this.npmPackages = npmPackages;
            }}
          />
        </a-row>
        <a-row>
          {this.usablePlugin.includes('web') && (
            <p style='text-align: center; background: lightblue; margin-top: 20px;'>
              WEB组件
            </p>
          )}
          {this.usablePlugin.includes('web') &&
            []
              .concat(webPluginList, this.npmPackages)
              .filter(plugin => plugin.visible)
              .map(plugin => (
                <a-col span={12} style={{ marginTop: '10px' }}>
                  <ShortcutButton
                    clickFn={this.clone.bind(this, plugin)}
                    mousedownFn={this.handleDragStartFromMixin.bind(
                      this,
                      plugin,
                    )}
                    // title={plugin.title}
                    title={plugin.i18nTitle[this.currentLang] || plugin.title}
                    faIcon={plugin.icon}
                    disabled={plugin.disabled}
                  />
                </a-col>
              ))}
        </a-row>
      </div>
    );
  },
};
